import { AppBar, Toolbar, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar 
      position="static"
      sx={{
        background: '#fff',
        boxShadow: isMobile ? 'none' : '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          mt: 2,
          mx: 'auto',
          pb: '18px',
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            width: { xs: 393, md: 938 },
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6">
            Zen's Tracker
          </Typography>         
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;