import { Box, Typography } from '@mui/material';
import { useState } from 'react';

interface MenuBoxProps {
  title: string;
  color: string;
}

export const MenuBox = ({ title, color }: MenuBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        width: 200,
        height: 100,
        backgroundColor: isHovered ? color : '#f0f0f0',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography variant="h6" color={isHovered ? '#fff' : '#000'}>
        {title}
      </Typography>
    </Box>
  );
};