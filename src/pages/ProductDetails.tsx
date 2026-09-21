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

export default function ProductDetails() {
    const { slug } = useParams<{ slug: string }>();

    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);

    const selectedColor = 'Moss';

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

    return (
        <div className="md:px-10">
            <Breadcrumbs category={product.category} />
            <div className="flex flex-col md:flex-row md:gap-6">
                <div className='md:w-2/3'>
                    <section className="px-4">
                        <p className="md:hidden text-[17px] font-semibold mb-2">{product.name}</p>
                        <p className="md:hidden text-[16px] font-semibold mb-3">${Number(product.price).toFixed(2)}</p>
                    </section>
                    <section>
                        <img className="object-cover" src={product.imageUrl} alt={`Image for ` + product.name} />
                    </section>
                </div>
                <div className="md:w-1/3">
                    <p className="hidden md:block text-[17px] md:text-[28px] md:leading-[1.5] font-semibold mb-2">{product.name}</p>
                    <p className="hidden md:block text-[16px] md:text-[18px] font-semibold mb-3">${Number(product.price).toFixed(2)}</p>
                    <section className="p-4 md:p-0">
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
                        <div className="">
                            <ColorSelection text="Core" swatches={coreColorsHex} />
                            <ColorSelection text="Limited Edition" swatches={limitedEditionHex} />
                        </div>
                        <div>
                            <SizeSelection />
                        </div>
  
                    </section>
                    <section className="">
                        <div className="p-4 flex gap-1 border-t">
                            <QuantitySelect />
                            <Button 
                                variant="contained"
                                startIcon={<ShoppingBagIcon />}
                                className="w-100"
                                sx={{
                                    fontSize: '12px',
                                    lineHeight: '1.5',
                                    backgroundColor: '#56584c',
                                    '&:hover': {
                                        backgroundColor: '#56584cd9',
                                    }
                                }}
                            >
                                ADD TO BAG
                            </Button>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}