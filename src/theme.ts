import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2b7592',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    // Name of the component
    MuiAccordion: {
      styleOverrides: {
        // Name of the slot
        heading: {
          // Some CSS
          margin: '0px',
        },
      },
    },
  },
});