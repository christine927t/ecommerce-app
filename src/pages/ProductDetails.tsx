import React from 'react'; 
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductBySlug } from '../services/api';
import type { Product } from '../types/product'
import Breadcrumbs from '../components/productDetails/Breadcrumbs';
import CoreColorsModal from '../components/productDetails/CoreColorsModal';
import Button from '@mui/material/Button';
import ColorSelection from '../components/productDetails/ColorSelection';
import { coreColorsHex } from "../constants/coreColors"
import { limitedEditionHex } from "../constants/coreColors"
import SizeSelection from '../components/productDetails/SizeSelection';
import QuantitySelect from '../components/productDetails/QuantitySelect';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DetailsTabs from '../components/productDetails/DetailsTabs';
import { useCartStore } from '../store/cartStore';
import Snackbar from '../components/productDetails/Snackbar.tsx'
import AddedToCart from '../components/productDetails/AddedToCart.tsx';

type Props= {
    onViewBag: () => void;
}

export default function ProductDetails({ onViewBag }: Props) {
    const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_URL;

    const { slug } = useParams<{ slug: string }>();

    const [open, setOpen] = React.useState(false);

    const [selectedColor, setSelectedColor] = React.useState('Moss')
    const [selectedSize, setSelectedSize] = React.useState('')
    const [quantity, setQuantity] = React.useState(1)

    const addItem = useCartStore((state) => state.addItem);
    const [addedToCart, setAddedToCart] = React.useState(false);

    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [openAddedToCart, setOpenAddedToCart] = React.useState(false);

    const {
        data: product, 
        isLoading, 
        error 
    } = useQuery<Product>({
        queryKey: ['product', slug],
        queryFn: () => fetchProductBySlug(slug!),
        enabled: !!slug,
    });

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        const isNotFound = 
            error instanceof Error && error?.message?.includes('404')

        if (isNotFound) {
            return <p>Product not found.</p>
        }

        return <p>Failed to load product.</p>
    }

    if (!product) {
        return <p>Product not found.</p>
    }

    const handleAddToBag = () => {
        if (!selectedSize) {
            setOpenSnackbar(true)
            return
        }

        addItem({
            product,
            color: selectedColor,
            size: selectedSize,
            quantity
        })

        setAddedToCart(true)

        setTimeout(() => {
            setAddedToCart(false)
        }, 3000)

        setOpenAddedToCart(true);
    }

    return (
        <div className="md:px-10 mb-10">
            <Breadcrumbs category={product.category} />
            <div className="flex flex-col md:flex-row md:gap-6">
                <div className='md:w-2/3'>
                    <section className="px-4">
                        <p className="md:hidden text-[17px] font-semibold mb-2">{product.name}</p>
                        <p className="md:hidden text-[16px] font-semibold mb-3">${Number(product.price).toFixed(2)}</p>
                    </section>
                    <section>
                        <img className="object-cover" src={`${cloudinaryBaseUrl}${product.imageUrl}`} alt={`Image for ` + product.name} />
                    </section>
                </div>
                <div className="md:w-1/3">
                    <p className="hidden md:block text-[17px] md:text-[28px] md:leading-[1.5] font-semibold mb-2">{product.name}</p>
                    <p className="hidden md:block text-[16px] md:text-[18px] font-semibold mb-3">${Number(product.price).toFixed(2)}</p>
                    <section className="p-4 md:px-0">
                        <div className="flex justify-between items-center">
                            <p className="text-[12px]">
                                <span className="font-semibold">Color:</span> {selectedColor}
                            </p>
                            <Button 
                                onClick={()=> setOpen(true)} 
                                sx={{
                                    textTransform: "none", 
                                    color: "#000000", 
                                    fontWeight: "normal", 
                                    fontSize: "12px",
                                    borderBottom: "1px solid #000000",
                                    borderRadius: "0px",
                                    padding: "0px",
                                    lineHeight: '.8'
                                }}>
                                Color Gallery
                            </Button>
                            <CoreColorsModal open={open} onClose={() => setOpen(false)}/>
                        </div>
                        <div>
                            <ColorSelection 
                                text="Core" 
                                swatches={coreColorsHex} 
                                value={selectedColor} 
                                onChange={setSelectedColor}
                            />
                            <ColorSelection 
                                text="Limited Edition" 
                                swatches={limitedEditionHex} 
                                value={selectedColor} 
                                onChange={setSelectedColor}
                            />
                        </div>
                        <div>
                            <SizeSelection value={selectedSize} onChange={setSelectedSize}/>
                        </div>
                    </section>
                    <section className="border-t border-b border-[#e6e6e6] md:border-t-0 mb-4">
                        <div className="px-4 py-5 md:px-0 md:pt-0 flex gap-1">
                            <QuantitySelect value={quantity} onChange={setQuantity} />
                            <Button 
                                variant="contained"
                                startIcon={<ShoppingBagIcon />}
                                className="w-100"
                                onClick={handleAddToBag}
                                sx={{
                                    fontSize: '12px',
                                    lineHeight: '1.5',
                                    backgroundColor: '#24323f',
                                    boxShadow: 'none',
                                    width: '100%',
                                    '&:hover': {
                                        backgroundColor: '#24323fd9',
                                        boxShadow: 'none',
                                    }
                                }}
                            >
                                ADD TO BAG
                            </Button>
                        </div>
                    </section>
                    <section className="bg-[#f5f5f5] p-4 rounded-sm">
                        <DetailsTabs />
                    </section>
                </div>

            </div>
            <Snackbar openSnackbar={openSnackbar} onClose={() => setOpenSnackbar(false)}/>
            <AddedToCart 
                openAddedToCart={openAddedToCart} 
                onClose={() => setOpenAddedToCart(false)}
                product={product}
                selectedColor={selectedColor}
                selectedSize={selectedSize} 
                onViewBag={onViewBag}
            />
        </div>
    )
}