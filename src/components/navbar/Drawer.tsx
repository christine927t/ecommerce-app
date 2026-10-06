import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import DrawerTabList from './DrawerTabList';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }} role="presentation">
      <div className="flex justify-between items-center">
        <DrawerTabList onCloseDrawer={toggleDrawer(false)} />
        <IconButton
              aria-label="close"
              onClick={toggleDrawer(false)}
              sx={(theme) => ({
                  position: 'absolute',
                  right: 12,
                  top: 12,
                  color: theme.palette.grey[500],
              })}
          >
              <CloseIcon />
          </IconButton>
      </div>
    </Box>
  );

  return (
    <div className="block md:hidden cursor-pointer">
      <DragHandleIcon onClick={toggleDrawer(true)} sx={{fill: '#000000'}}></DragHandleIcon>
      <Drawer 
        open={open} 
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
