// key color: 
// filter 추가
// 원래는 log 
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Flex } from '@/shared/ui';

const TracePage = () => {
  const theme = useTheme();
  
  return (
    <Box>
      <Typography sx={{ 
        fontSize: 24,
        fontFamily: 'tvNjoystories',
        color: theme.palette.primary.main,
      }}>
        What you trace
      </Typography>
    </Box>
  )
};

export default TracePage;