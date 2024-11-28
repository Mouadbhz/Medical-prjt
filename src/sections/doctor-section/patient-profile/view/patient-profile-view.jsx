import React, { useState } from 'react';

import { Grid, Stack, Button, Container, Typography } from '@mui/material';

// import questions from 'src/_mock/questions';
import { patients } from 'src/Data/patients';

import SvgColor from 'src/components/svg-color';

import FAQPatientProfile from '../FAQ-patient';
import PatientProfile from '../patient-profile';
import PatientProfileCard from '../patient-profile-card';

export default function PatientProfileView() {
  // console.log(typeof questions);
  /*
  const QuestionsArray = (
    console.log(questions),
  );
*/
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleClick = (patient) => {
    setSelectedPatient(patient);
  };

  const returnClick = () => {
    setSelectedPatient(null);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Patient Profiles
      </Typography>

      {selectedPatient ? (
        // Show the second grid when a patient is selected
        <>
          <Stack container direction="row" justifyContent="flex-start" sx={{ mb: 5 }}>
            <Button
              variant="outlined"
              onClick={() => returnClick()}
              sx={{
                border: 'none',
                '&:hover': {
                  backgroundColor: 'transparent', 
                  border: 'none', 
                },
              }}
            >
              <SvgColor src="/assets/icons/ic_left.svg" sx={{ width: 30, height: 30 }} />
            </Button>
          </Stack>
          <Grid
            container
            spacing={3}
            sx={{
              /* border:'red 2px solid', */
              pl: '15px',
            }}
          >
            <PatientProfile selectedPatient={selectedPatient} />
            <FAQPatientProfile selectedPatient={selectedPatient} />
          </Grid>
        </>
      ) : (
        // Show the first grid when no patient is selected
        <Grid container spacing={3}>
          {patients.map((patient) => (
            <Grid key={patient.id} item xs={12} sm={6} md={4} onClick={() => handleClick(patient)}>
              <PatientProfileCard patient={patient} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
