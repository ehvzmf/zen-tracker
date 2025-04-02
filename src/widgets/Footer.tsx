import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">© 2025 My App</Typography>
    </Box>
  );
};

export default Footer;
