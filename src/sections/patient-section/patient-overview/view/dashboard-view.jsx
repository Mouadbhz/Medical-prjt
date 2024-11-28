import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { account } from 'src/Data/account';
import { patients } from 'src/Data/patients';

import Iconify from 'src/components/iconify';

import Doctors from '../doctors';
import AppCards from '../app-cards';
import ScoresGraph from '../score-graph';
import TrafficBySite from '../traffic-by-site';
import CountryPatients from '../country-patients';



// ----------------------------------------------------------------------

export default function PatientDashboardView() {
  const selectedPatient = patients[0];
  console.log(account.displayName);
   console.log(selectedPatient);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>

        <Grid xs={12} sm={6} >
          <AppCards
            title={selectedPatient.name}
            Subtitle={selectedPatient.country}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6}>
          <AppCards
            title='Pass a questionnaire'
            Subtitle='go to score to see your score'
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <ScoresGraph
            title="High Scores"
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
                  name: 'Andy Fadel',
                  type: 'column',
                  fill: 'solid',
                  data: [7 , 6 , 7 , 5 ,4.5 ,3 , 4 , 3.5 , 5 , 5.5 , 3.5],
                },
                {
                  name: 'Alma Zulauf',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Camille Crona',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Bradley Windler',
                  type: 'area',
                  fill: 'gradient',
                  data: [40, 15, 16, 20, 35, 45, 54, 32, 49, 56, 42],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Doctors
            title="Alpha Doctors"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} >
          <CountryPatients
            title="Alpha Patients"
            subheader=""
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>




        <Grid xs={12} >
          <TrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

      </Grid>
    </Container>
  );
}
