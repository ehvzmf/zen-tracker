import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">© 2025 Zen's Calculator by MY</Typography>
    </Box>
  );
};

export default Footer;