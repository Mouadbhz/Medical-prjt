import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { account } from 'src/Data/account';

import ScoreGraphe from '../score-graphe';







// ----------------------------------------------------------------------

export default function ScoreView() {
  // console.log("account score");
  // console.log(account.score);
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Score</Typography>

      </Stack>
      <Grid xs={12} md={6} lg={8}>
          <ScoreGraphe
            title="Your Scores"
            subheader="This year"
            chart={{
              labels: [
                '01/01/2024',
                '02/01/2024',
                '03/01/2024',
                '04/01/2024',
                '05/01/2024',
                '06/01/2024',
                '07/01/2024',
                '08/01/2024',
                '09/01/2024',
                '10/01/2024',
                '11/01/2024',
              ],
              series: [
                {
                  name: account.displayName,
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
              ],
            }}
          />
        </Grid>
      
    </Container>
  );
}
