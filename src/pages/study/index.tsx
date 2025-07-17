// key color: 
// filter 추가
// exams, languages, skills, etc.
import { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Flex } from '@/shared/ui';

const StudyPage = () => {
  const theme = useTheme();
  
  return (
    <Box>
      <Typography sx={{ 
        fontSize: 24,
        fontFamily: 'tvNjoystories',
        color: theme.palette.primary.main,
      }}>
        What you study
      </Typography>
    </Box>
  )
};

export default StudyPage;