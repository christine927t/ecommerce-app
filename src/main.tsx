


import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

//start MSQ in development
if (import.meta.env.DEV) {
  //dynamic import so worker isn't bundled in production
  import('./mocks/browser').then(({ worker }) => worker.start())
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
