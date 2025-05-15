import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
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
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h6">
          Zen's Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;