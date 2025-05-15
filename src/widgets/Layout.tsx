import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

export const Layout: React.FC = () => {
  return (
    <Box 
      sx={{
        // minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        // justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          mx: 'auto',
          flexGrow: 1,
          width: '100%',
          // maxWidth: "938px",
          // display: 'flex',
          // flexDirection: 'column',
          // minHeight: '100vh',
          // justifyContent: 'center',
          // alignItems: 'center', 
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};