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
        backgroundColor: '#000',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100vw', sm: 600 },
          minHeight: '100vh',
          backgroundColor: '#fff',
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            p: 2,
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
        <Footer />        
      </Box>
    </Box>
  );
};