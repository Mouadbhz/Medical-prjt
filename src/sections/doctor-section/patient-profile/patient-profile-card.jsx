import PropTypes from 'prop-types';

import { Box,Card,Stack,Divider ,Typography } from '@mui/material';



// ----------------------------------------------------------------------

export default function PatientProfileCard({ patient }) {
  const BackgroundImg = (
    <Box
      component="img"
      alt={patient.name}
      src={patient.bgURL}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const patientImg = (
    <Box
      component="img"
      alt={patient.name}
      src={patient.photoURL}
      sx={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        position: 'absolute',
        borderRadius: '50%',
      }}
    />
  );

  return (
    <Card sx={{cursor: 'pointer'}} style={{
      boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
      transition: 'transform 0.3s',
    }}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {BackgroundImg}
        {patientImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography color="inherit" variant="h6" textAlign="center">
          {patient.name}
        </Typography>
        <Typography variant="subtitle2" textAlign="center" style={{ color: '#637381' }}>
          {patient.professional_situation}
        </Typography>
        </Stack>
        <Divider sx={{borderStyle:'dashed'}}/>

        <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="column" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" sx={{color:'#637381', p: 1}}> age</Typography>
            <Typography variant="body1" color="initial">
            {patient.age}
          </Typography>
            </Stack> 
            <Stack direction="column" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" sx={{color:'#637381', p: 1}}>gender</Typography>
            <Typography variant="body1" color="initial">
            {patient.gender}
          </Typography>
            </Stack> 
            <Stack direction="column" alignItems="center" justifyContent="space-between">
            <Typography variant="body1" sx={{color:'#637381', p: 1}}>situation</Typography>
            <Typography variant="body1" color="initial">
            {patient.professional_situation}
          </Typography>
            </Stack> 
          
          
        </Stack>
      </Stack>
    </Card>
  );
}

PatientProfileCard.propTypes = {
  patient: PropTypes.object,
};

/*
import { PropTypes } from 'prop-types';

import { Box , Card , Stack , Avatar, Typography } from '@mui/material';

export default function PatientProfileCard({patient}) {
  const renderImg = (
    <Box
      component="img"
      alt={patient.name}
      src={patient.photoURL}
      sx={{
        top: 0,
        width: 1,
        height: 0.5,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );
  return (
    <Card sx={{height:'350px'}}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
      <Typography variant="body1" color="initial">
        {patient.name}
      </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="body1" color="initial">
        {patient.age}
      </Typography>
      <Typography variant="body1" color="initial">
        {patient.gender}
      </Typography>
      <Typography variant="body1" color="initial">
        {patient.professional_situation}
      </Typography>
        </Stack>
      </Stack>


      
      
      <Typography variant="body1" color="initial">
        {patient.questionnaire_answers[1][0]}
      </Typography>
    </Card>
  );
}

PatientProfileCard.propTypes = {
  patient : PropTypes.object,
};

*/
