import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ColorsImgs from './CoreColorsImgs';
import { coreColors, limitedEdition } from '../../constants/coreColors';

type CoreColorImg = {
    name: string;
    src: string;
}

type LimitedEditionImg = {
    name: string;
    src: string;
}

const coreColorsImgs: CoreColorImg[] = [];
const limitedEditionImgs: LimitedEditionImg[] = [];

coreColors.forEach((color: string) => {
    coreColorsImgs.push({
        name: color.replaceAll('-',' ').toLocaleLowerCase(),
        src: color
    })
})

limitedEdition.forEach((color: string) =>{
    limitedEditionImgs.push({
        name: color.replaceAll('-',' ').toLocaleLowerCase(),
        src: color
    })
})

coreColors.sort((a: any, b: any) => a-b)
limitedEditionImgs.sort((aa: any, bb: any) => aa-bb)
const colorsLength = coreColors.length + limitedEditionImgs.length

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

type Props = { open: boolean; onClose: () => void };

export default function CoreColorsModal({ open, onClose }: Props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={onClose}
                fullScreen={isMobile}
                fullWidth
                maxWidth="md"
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <div className="flex flex-col md:flex-row items-center gap-3 p-4 md:px-10 md:py-6">
                    <p className="text-[17px] md:text-[28px] font-semibold" id="customized-dialog-title">
                        Color Gallery
                    </p>
                    <p>{colorsLength} Colors</p>
                </div>

                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 12,
                        top: 12,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <div className="md:px-6">
                        <p className="text-[17px] font-semibold pb-2">Core Colors</p>
                        <ColorsImgs colors={coreColorsImgs} />
                        <p className="text-[17px] font-semibold pb-2">Limited Edition Colors</p>
                        <ColorsImgs colors={limitedEditionImgs} />
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}