import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ApiIcon from '@mui/icons-material/Api';
import BasicMenubar from './BasicMenubar';
import Drawer from './Drawer';
import CartDrawer from '../cart/CartDrawer';

type Props= {
  cartOpen: boolean
  onCartOpen: (value: boolean) => void
  onCartClose: (value: boolean) => void
}
export default function Navbar({ cartOpen, onCartOpen, onCartClose }: Props) {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen: boolean) => () => {
  //     setOpen(newOpen);
  // };
  
  return (
    <AppBar sx={{
      position: 'relative',
      boxShadow: "none",
      backgroundColor: '#ffffff'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Drawer />
          <div className="flex items-center">
            <ApiIcon sx={{ mr: 1, color: '#000000' }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  marginRight: '0px',
                  display: { xs: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#000000',
                  textDecoration: 'none',
                  borderBottom: 'none',
                  paddingBottom: '0'
                }}
              >
                PLUMS
              </Typography>
          </div>
          {/* Shopping links */}
          <Box className="hidden md:flex" sx={{ flexGrow: 1, justifyContent: 'center' }}>
            <BasicMenubar />
          </Box>
          <CartDrawer cartOpen={cartOpen} onCartOpen={onCartOpen} onCartClose={onCartClose} />
        </Toolbar>
      </Container>
    </AppBar>
  );

}