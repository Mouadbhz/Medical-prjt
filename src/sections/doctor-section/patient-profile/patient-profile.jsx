import { PropTypes } from 'prop-types';

import { Grid,  Card,useTheme, CardMedia, TextField,Typography } from '@mui/material';

export default function PatientProfile({ selectedPatient }) {
  const theme = useTheme();

  return (
    /*
    <Grid xs={12}>
      <Typography variant="body1" color="initial">
        {selectedPatient.name}
      </Typography>
    </Grid>
    */
    <>
      <Grid xs={12} sm={12} md={15} lg={15} 
      sx={{ mb: 4,
        boxShadow:
        'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
        borderRadius: '15px'
         }}>
        <Card
          raised
          sx={{
            width: {
              xs: '100%', // Extra small devices (phones)
              sm: '100%', // Small devices (tablets)
              md: '100%', // Medium devices (desktops)
              lg: '100%', // Large devices (large desktops)
            },
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image={selectedPatient.bgURL}
            alt={selectedPatient.displayName}
            title={selectedPatient.displayName}
            sx={{ zIndex: '1' }}
          />

          <CardMedia
            component="img"
            image={selectedPatient.photoURL}
            alt={selectedPatient.displayName}
            title={selectedPatient.displayName}
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
          <Typography
            variant="h6"
            color="initial"
            sx={{
              position: 'absolute',
              zIndex: '3',
              bottom: '15px',
              left: '50%',
              transform: 'translate(-50% , 0)',
            }}
          >
            {selectedPatient.displayName}
          </Typography>
        </Card>
      </Grid>

      <Grid
        lg={12}
        md={12}
        sm={12}
        xs={12}
        rowSpacing={2}
        columnSpacing={3}
        mb={4}
        sx={{
          padding: '15px',
          // border: '2px green solid',
          borderRadius: '16px',
          boxShadow:
            'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          rowGap: '20px',
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            display: 'flex',
            gap: '20px',
            py: '15px',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column', // Change to row for small screens and up
            },
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={selectedPatient.name}
            fullWidth
            disabled
            inputProps={{
              style: {
                pointerEvents: 'none',
                WebkitTextFillColor: 'black',
              },
            }}
          />
        </Typography>

        <Typography
          variant="body1"
          color="initial"
          sx={{
            display: 'flex',
            gap: '20px',
            py: '15px',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column', // Change to row for small screens and up
            },
          }}
        >
          <TextField
            label="Age"
            variant="outlined"
            value={selectedPatient.age}
            fullWidth
            disabled
            inputProps={{
              style: {
                pointerEvents: 'none',
                WebkitTextFillColor: 'black',
              },
            }}
          />
          <TextField
            label="Gender"
            variant="outlined"
            value={selectedPatient.gender}
            fullWidth
            disabled
            inputProps={{
              style: {
                color: 'blue',
                pointerEvents: 'none',
                WebkitTextFillColor: 'black',
              },
            }}
          />
        </Typography>

        <Typography
          variant="body1"
          color="initial"
          sx={{
            display: 'flex',
            gap: '20px',
            py: '15px',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column', // Change to row for small screens and up
            },
          }}
        >
          <TextField
            label="Material Status"
            variant="outlined"
            value={selectedPatient.Marital_status}
            fullWidth
            disabled
            inputProps={{
              style: {
                color: 'blue',
                pointerEvents: 'none',
                WebkitTextFillColor: 'black',
              },
            }}
          />
          <TextField
            label="Level Of Education"
            variant="outlined"
            value={selectedPatient.Level_of_education}
            fullWidth
            disabled
            inputProps={{
              style: {
                pointerEvents: 'none',
                WebkitTextFillColor: 'black',
              },
            }}
          />
        </Typography>

        <Typography
          variant="body1"
          color="initial"
          sx={{
            display: 'flex',
            gap: '20px',
            py: '15px',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
            },
          }}
        >
          <TextField
            label="Professional Situation"
            variant="outlined"
            value={selectedPatient.professional_situation}
            fullWidth
            disabled
            inputProps={{
              style: {
                pointerEvents: 'none',
                WebkitTextFillColor: 'black',
              },
            }}
          />
          <TextField
            label="Annual Revenue"
            variant="outlined"
            value={selectedPatient.Annual_revenue}
            fullWidth
            disabled
            inputProps={{
              style: {
                pointerEvents: 'none',
                WebkitTextFillColor: 'black',
              },
            }}
          />
        </Typography>
      </Grid>

    </>
  );
}

PatientProfile.propTypes = {
  selectedPatient: PropTypes.object,
};
