import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.grey[500],
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <Box 
        sx={{ 
          margin: 'auto',
          border: '1px solid red',
        }}
      >
        <Typography variant="body2">© 2025 Zen's Calculator by MY</Typography>
      </Box>
    </Box>
  );
};

export default Footer;