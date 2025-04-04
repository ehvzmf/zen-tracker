import { Box, BoxProps } from '@mui/material';

interface FlexProps extends BoxProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: number | string;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  wrap = 'nowrap',
  justify = 'flex-start',
  align = 'stretch',
  gap = 0,
  ...props
}) => {
  return (
    <Box
      display="flex"
      flexDirection={direction}
      flexWrap={wrap}
      justifyContent={justify}
      alignItems={align}
      gap={gap}
      {...props}
    >
      {children}
    </Box>
  );
};