


import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//start MSQ in development
if (import.meta.env.DEV) {
  //dynamic import so worker isn't bundled in production
  import('./mocks/browser').then(({ worker }) => worker.start())
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
