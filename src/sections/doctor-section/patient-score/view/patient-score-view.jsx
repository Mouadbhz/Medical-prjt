import {Grid , Container ,Typography} from '@mui/material';

import PatientScore from '../patient-score-diagram';


export default function PatientScoreView (){
  const handleSortChangeInView = (eventTarget) => {
    console.log('Handle Sort Change in View called');
    console.log('Event target in PatientScoreView:', eventTarget);
    // Rest of the function...
  };
  

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Patient Profiles
      </Typography>
      <Grid xs={12} md={6} lg={8}>
          <PatientScore
            title="High Scores"
            subheader="This year"
            onSortChange={handleSortChangeInView}
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
                  name: 'Alma Zulauf',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ],
            }}
          />
        </Grid>
    </Container>
  );
}