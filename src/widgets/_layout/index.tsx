import { Box } from '@mui/material';
import Header from '../header/Header';
// import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠와 사이드바 */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flex: 1, padding: '1rem' }}>
          {children}
        </Box>
      </Box>

      {/* 푸터 
      <Footer />*/}
    </Box>
  );
};

export default Layout;