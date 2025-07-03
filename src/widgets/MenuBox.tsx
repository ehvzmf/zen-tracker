import { Box, Typography } from '@mui/material';
import { useState } from 'react';

interface MenuBoxProps {
  title: string;
  imgSrc: string;
  color: string;
  hoverColor?: string;
  path: string;
  onClick?: () => void;
}

export const MenuBox = ({ title, color }: MenuBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        width: { xs: 180, sm: 200 },
        height: { xs: 100, sm: 120 },
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