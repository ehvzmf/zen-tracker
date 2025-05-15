import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import theme from '@/shared/theme/theme';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppRoutes } from './app/AppRoutes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>,
);