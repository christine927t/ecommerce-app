
import * as React from 'react';
import { useCartStore } from '../../store/cartStore';
import QuantitySelect from '../productDetails/QuantitySelect'
import Drawer from '@mui/material/Drawer';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function CartDrawer() {
    const [open, setOpen] = React.useState(false);
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)

    const subtotal = items.reduce(
        (total, item) =>
            total + Number(item.product.price) * item.quantity,
        0
    )

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <>
        <h1>Your Cart</h1>
                {items.length === 0 && <p>Your cart is empty.</p>}

                {items.map((item) => (
                    <>
                        <div
                            key={`${item.product.id}-${item.color}-${item.size}`}
                        >
                            <p>{item.product.name}</p>
                            <p>Color: {item.color}</p>
                            <p>Size: {item.size}</p>
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
                            <p>
                                ${Number(item.product.price).toFixed(2)}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() =>
                                removeItem(
                                    item.product.id,
                                    item.color,
                                    item.size
                                )
                            }
                        >
                            Remove
                        </button>
                    </>
                ))}
                <p>
                    Subtotal: ${subtotal.toFixed(2)}
                </p>
        </>

    );

    return (
        <div>
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
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}