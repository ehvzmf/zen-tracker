import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
// import Sidebar from './Sidebar';

export const Layout: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
        <Box component="main" flex={1}>
          <Outlet />
        </Box>
      <Footer />
    </Box>
  );
};