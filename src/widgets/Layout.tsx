import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

export const Layout = () => {
  return (
    <Box 
      sx={{
        mx: 'auto',
        width: 938,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
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