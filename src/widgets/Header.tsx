import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="static"
      sx={{
        boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          mx: 'auto',
          px: 2,
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            width: { xs: 393, md: 938 },

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