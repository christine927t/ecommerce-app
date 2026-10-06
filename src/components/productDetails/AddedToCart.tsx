import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import type { TransitionProps } from '@mui/material/transitions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Checkmark from '../../assets/checkmark.tsx';
import type { Product } from '../../types/product.ts'
import { useCartStore } from '../../store/cartStore';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props= {
    openAddedToCart: boolean
    onClose: (value: boolean) => void
    onViewBag: () => void
    product: Product;
    selectedColor: string
    selectedSize: string
}

export default function AddedToCart(
    { 
        openAddedToCart, 
        onClose, 
        product, 
        selectedColor, 
        selectedSize,
        onViewBag
    }: Props) {
        const handleClose = () => {
            onClose(false);
        };

        const theme = useTheme()
        const isMobile = useMediaQuery(theme.breakpoints.down('md'));
        const itemLength = useCartStore((state) => state.items.length)

        return (
            <React.Fragment>
                <Dialog
                    open={openAddedToCart}
                    slots={{
                        transition: Transition,
                    }}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    role="alertdialog"
                    fullScreen={isMobile}
                    sx={{
                        maxHeight: '500px',
                        top: 'unset',
                        '& .MuiDialog-paper': {
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            padding: '16px'
                        }
                    }}
                >
                    <div className="flex gap-2 items-center">
                        <p className="text-[20px] font-semibold">Added to Bag</p>
                        <div className="size-[16px] bg-[#285AD3] rounded-full flex items-center justify-center">
                            <Checkmark size="1.625em" />
                        </div>
                    </div>
        
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent sx={{ padding: '20px 0px' }}>
                        <div className="flex gap-4">
                            <img src={product.imageUrl} alt={product.name} className="size-[100px] object-cover rounded-[8px]"/>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p className="text-[13px] font-semibold mb-1">{product.name}</p>
                                    <div className="flex items-center">
                                        <p className="text-[13px]">{selectedSize} • {selectedColor}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <Button 
                        onClick={() => {
                            handleClose();
                            onViewBag();
                        }} 
                        className="w-full h-[50px] tracking-[2px]"
                        sx={{
                            borderRadius: '4px',
                            border: '2px solid',
                            fontWeight: 'semibold',
                            color: '#282828',
                            fontSize: '12px'
                        }}
                    >
                        VIEW BAG ({itemLength})
                    </Button>
                </Dialog>
            </React.Fragment>
        );
}