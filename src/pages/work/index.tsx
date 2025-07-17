// key color: 
// filter 추가
// 기본적으로 투두리스트, 분야 혹은 출근 시간 따라 조정 
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Flex } from '@/shared/ui';

const WorkPage = () => {
  const theme = useTheme();
  
  return (
    <Box>
      <Typography sx={{ 
        fontSize: 24,
        fontFamily: 'tvNjoystories',
        color: theme.palette.primary.main,
      }}>
        Workplace
      </Typography>
    </Box>
  )
};
// 응원문구 같은 거 추가

export default WorkPage;