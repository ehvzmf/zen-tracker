import { Box, Container, Typography, } from '@mui/material'

export const Home: React.FC = () => {
  return (
    <Container>
      <Typography>
        안녕! 여기는 홈입니다.
      </Typography>

      <Typography>
        4월
      </Typography>

      <Box>
        <Typography>
          총 예산 : 700,000
        </Typography>

        <Typography>
          잔액: 250,000
        </Typography>
      </Box>
      
    </Container>
  );
};