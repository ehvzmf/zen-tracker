import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar: React.FC = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: '200px',
        backgroundColor: '#f4f4f4',
        padding: '1rem',
      }}
    >
      <List>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
