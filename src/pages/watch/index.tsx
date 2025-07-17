// key color: 
// filter 추가
// movies, series, animations, documentaries, etc.
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Flex } from '@/shared/ui';

const WatchPage = () => {
  const theme = useTheme();
  
  return (
    <Box>
      <Typography sx={{ 
        fontSize: 24,
        fontFamily: 'tvNjoystories',
        color: theme.palette.primary.main,
      }}>
        What you watch
      </Typography>
    </Box>
  )
};

export default WatchPage;