import { Box, Typography, Divider } from '@mui/material'
import { MenuBox } from '@/widgets/MenuBox'

const Home: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ m: 0 }}>
        <Box
          component='img'
          src='/images/zen.png'
          alt='Zen'
          sx={{
            width: 80,
            height: 80,
          }}
        />
        <Typography 
          sx={{ 
            ml: 2,
            mt: -2,
            fontFamily: 'Pretendard', 
            fontSize: 25, 
            fontWeight: 600,
          }}
        >
          Hi, Zen! 
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 3, m: 2 }}>
        <MenuBox />
        <MenuBox />
      </Box>



    </Box>
  );
};

export default Home;