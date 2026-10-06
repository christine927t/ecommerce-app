
import * as React from 'react';
import { useCartStore } from '../../store/cartStore';
import QuantitySelect from '../productDetails/QuantitySelect'
import Drawer from '@mui/material/Drawer';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Zoom from '@mui/material/Zoom';

type Props= {
    cartOpen: boolean
    onCartOpen: (value: boolean) => void
    onCartClose: (value: boolean) => void
}

export default function CartDrawer({ cartOpen, onCartOpen, onCartClose }: Props) {
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)

    const subtotal = items.reduce(
        (total, item) =>
            total + Number(item.product.price) * item.quantity,
        0
    )

    const toggleDrawer = (newOpen: boolean) => () => {
        if (newOpen) onCartOpen(newOpen);
        else onCartClose(newOpen)
    };

    const DrawerList = (
        <div className="p-4"> 
            <div className="flex justify-between items-center position-relative pb-5">
                <p className="text-[13px] font-semibold">MY BAG {items.length && `- ${items.length}`}</p>
                <IconButton
                    aria-label="close"
                    onClick={toggleDrawer(false)}
                    sx={{
                        padding: 0,
                        color: '#282828',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                </div>
                {items.length === 0 && <p>Your cart is empty.</p>}

                {items.length > 0 && subtotal < 50 && (
                    <Zoom in={true}>
                        <div className=" h-[40px]">
                            <p className="text-[13px] mb-3">
                                ${50-subtotal} more for Free Shipping!
                            </p>
                            <div className="w-full bg-[#e6e6e6] rounded-[4px] h-[6px] relative">
                                <span
                                    className="absolute top-0 left-0 bg-[#282828] rounded-[4px] h-[6px]"
                                    style={{ width: `${(subtotal / 50) * 100}%` }}
                                ></span>
                            </div>
                        </div>
                    </Zoom>
                )}

                {items.length > 0 && subtotal >= 50 && (
                    <Zoom in={true}>
                        <div className="w-full flex items-center justify-center bg-[#f5f5f5] h-[40px] gap-4">
                            <div className="flex items-center justify-center bg-[#000000] rounded-full size-[22px]">
                                <CheckIcon sx={{"fill" : "white", width: "16px", height: "16px" }} />
                            </div>
                            <p className="text-[13px] font-semibold">Enjoy FREE Shipping!</p>
                        </div>
                    </Zoom>
                )}

                {items.map((item) => (
                    <div key={`${item.product.id}-${item.color}-${item.size}`}>
                        <div className="flex justify-between py-6 border-b border-[#e6e6e6]">
                            <div className="flex gap-3">
                                <img src={item.product.imageUrl} alt={item.product.name} className="size-[100px] object-cover"/>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="text-[13px] font-semibold mb-1">{item.product.name}</p>
                                        <div className="flex items-center">
                                            <p className="text-[13px]">{item.size} • {item.color}</p>
                                        </div>
                                    </div>
                                    <QuantitySelect
                                        value={item.quantity}
                                        onChange={(quantity) =>
                                            updateQuantity(
                                                item.product.id,
                                                item.color,
                                                item.size,
                                                quantity
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                              <button
                                    type="button"
                                    className="cursor-pointer"
                                    data-testid="remove-item-icon"
                                    onClick={() =>
                                        removeItem(
                                            item.product.id,
                                            item.color,
                                            item.size
                                        )
                                    }
                                >
                                    <DeleteOutlinedIcon />
                                </button>
                                <p>${Number(item.product.price).toFixed(2)}</p>
                            </div>        
                     
                        </div>
                    </div>
                ))}
                <div className="py-5 flex justify-between font-bold">
                    <p>Subtotal:</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
        </div>
    );

    return (
        <div className="cursor-pointer md:ml-20">
            <ShoppingBagOutlinedIcon 
                data-testid="shopping-bag-icon"
                onClick={toggleDrawer(true)} 
                sx={{ fill: '#282828', position: 'relative' }} 
            />
                { items.length > 0 && (
                <div className="absolute top-[8px] right-[-8px] bg-[#285AD3] rounded-full text-white size-[20px] text-[12px] flex items-center justify-center">
                    <p>{items.length}</p>
                </div>
                )}
            <Drawer 
                anchor="right" 
                open={cartOpen} 
                onClose={toggleDrawer(false)} 
                sx={{ 
                    '& .MuiDrawer-paper': {
                        width: { xs: '100%', md: '465px' },
                    }
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}