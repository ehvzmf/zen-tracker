// key color: 
// filter 추가
// book, articles, posts, blogs, etc.
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Flex } from '@/shared/ui';

const ReadPage = () => {
  const theme = useTheme();
  
  return (
    <Box>
      <Typography sx={{ 
        fontSize: 24,
        fontFamily: 'tvNjoystories',
        color: theme.palette.primary.main,
      }}>
        What you read
      </Typography>
    </Box>
  )
};

export default ReadPage;