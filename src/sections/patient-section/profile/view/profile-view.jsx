import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid, Card, CardMedia } from '@mui/material';

import { account } from 'src/Data/account';

import Score from '../score';

// ----------------------------------------------------------------------

export default function ProfileView() {
  return (
    <Container maxWidth="xl" >
      <Typography variant="h4" sx={{ mb: 5 }}>
        Profile
      </Typography>
      <Grid container spacing={3} direction='column'>
        <Grid xs={11} sm={20} md={20} lg={20}>
          <Card
            raised
            sx={{
              width: {
                xs: '100%', // Extra small devices (phones)
                sm: '100%', // Small devices (tablets)
                md: '100%', // Medium devices (desktops)
                lg: '90%', // Large devices (large desktops)
              },
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
              alt={account.displayName}
              title={account.displayName}
              sx={{ zIndex: '1' }}
            />

            <CardMedia
              component="img"
              image={account.photoURL}
              alt={account.displayName}
              title={account.displayName}
              sx={{
                position: 'absolute',
                zIndex: '3',
                top: '50%',
                left: '50%',
                width: '130px',
                height: '130px',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
              }}
            />
            <Typography variant="h6" color="initial" 
            sx={{
                position: 'absolute',
                zIndex: '3',
                bottom: '15px',
                left: '50%',
                transform: 'translate(-50% , 0)'
                }}>
              {account.displayName}
            </Typography>
          </Card>
        </Grid>

        <Grid xs={11} sm={20} md={20} lg={20} sx={{my:5}}>
          <Score
            title="My Score"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
              series: [
                {
                  name: `${account.displayName}`,
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
