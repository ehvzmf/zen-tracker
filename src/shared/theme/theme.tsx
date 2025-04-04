import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 938,
      lg: 1200,
      xl: 1400,
    },
  },
  typography: {
    fontFamily: 'Pretendard, -apple-system, sans-serif',
  },
  palette,
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          color: '#fff',
          boxShadow: 'none',
          fontWeight: 500,
          fontSize: '15px',
        },
        containedPrimary: {
          backgroundColor: '#515151',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#000',
          },
        },
        containedError: {
          backgroundColor: '#E53E3E',
          color: '#FAFAFA',
          '&:hover': {
            backgroundColor: '#E32727',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            color: '#000',
            fontWeight: 700,
          },
        },
        indicator: {
          backgroundColor: '#000',
          height: '3px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#8C8C8C',
          fontSize: '16px',
          fontWeight: 400,
          '& .Mui-selected': {
            color: '#000',
            fontWeight: 700,
          },
        },
      },
    },
  },
});

export default theme;
