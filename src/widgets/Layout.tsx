import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

export const Layout = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          p: 2,
          mx: 'auto',
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};