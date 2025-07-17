// key color: 
// 추구미를 위한 루틴 저장 및 알림
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Flex } from '@/shared/ui';

const RoutinePage = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography sx={{ 
        fontSize: 24,
        fontFamily: 'tvNjoystories',
        color: theme.palette.primary.main,
      }}>
        What you wanna be
      </Typography>
    </Box>
  )
};