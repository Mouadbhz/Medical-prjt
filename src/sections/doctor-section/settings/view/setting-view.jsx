import { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid, Stack ,Button,useTheme, TextField } from '@mui/material';

import { doctor } from 'src/Data/doctors';

import ImageUpload from '../uploadImage';
// ----------------------------------------------------------------------

export default function SettingsView() {
  const theme = useTheme();

  const AccountName = doctor.displayName;
  const AccountEmail = doctor.email;
  const AccountPhone = doctor.phone;
  const AccountAdress = doctor.adress;
  const AccountCountry = doctor.country;
  const AccountStateRegion = doctor.StateRegion;
  const AccountCity = doctor.city;
  const AccountZipCode = doctor.ZipCode;
  const AccountAbout = doctor.about;
  console.log(AccountAbout);

  const [values, setValues] = useState({
    name: { AccountName },
    email: { AccountEmail },
    phoneNumber: { AccountPhone },
    address: { AccountAdress },
    country: { AccountCountry },
    region: { AccountStateRegion },
    city: { AccountCity },
    zipCode: { AccountZipCode },
    about: { AccountAbout },
  });

  const handleChange = (prop) => (event) => {

    const modifiedContent = event.target.value;
    setValues({ ...values, [prop]: event.target.value });

    console.log(`Modified content in ${prop}:`, modifiedContent);
  };

  console.log(values.name.AccountName);
  console.log(values.email.AccountEmail);

  return (
    <Container maxWidth="xl" className="container" sx={{ pl: '45px !important' }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Settings
      </Typography>

      <Grid container spacing={3} rowSpacing={3} sx={{gap:'30px'}}>
        <Grid
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            padding: '15px',
            borderRadius: '16px',
            boxShadow:
              'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
          }}
        >
          <Stack direction='column' justifyContent='center' alignItems='center' height='100%' spacing={5} className='stack' >
          <ImageUpload />

          <Typography
            variant="body1"
            sx={{ color: 'rgb(145, 158, 171)', display: 'block', fontSize:'0.75rem',lineHeight:'1.5'}}
          >
            Allowed *.jpeg, *.jpg, *.png, *.gif
            <br />
            <span className='span-center'>max size of 3.1 MB</span>
          </Typography>

          </Stack>
        </Grid>

        <Grid
          lg={7}
          md={7}
          sm={12}
          xs={12}
          rowSpacing={2}
          columnSpacing={3}
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
                flexDirection: 'column', 
              },
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              value={values.name.AccountName}
              onChange={handleChange('name')}
              fullWidth
              InputLabelProps={{
                shrink: values.name.AccountName !== '',
              }}
            />
            <TextField
              label="Adress Email"
              variant="outlined"
              value={values.email.AccountEmail}
              onChange={handleChange('email')}
              fullWidth
              InputLabelProps={{
                shrink: values.email.AccountName !== '',
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
              label="Phone Number"
              variant="outlined"
              value={values.phoneNumber.AccountPhone}
              onChange={handleChange('phoneNumber')}
              fullWidth
              InputLabelProps={{
                shrink: values.phoneNumber.AccountPhone !== '',
              }}
            />
            <TextField
              label="Adress "
              variant="outlined"
              value={values.address.AccountAdress}
              onChange={handleChange('address')}
              fullWidth
              InputLabelProps={{
                shrink: values.address.AccountAdress !== '',
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
              label="Country"
              variant="outlined"
              value={values.country.AccountCountry}
              onChange={handleChange('country')}
              fullWidth
              InputLabelProps={{
                shrink: values.country.AccountCountry !== '',
              }}
            />
            <TextField
              label="State/Region "
              variant="outlined"
              value={values.region.AccountStateRegion}
              onChange={handleChange('region')}
              fullWidth
              InputLabelProps={{
                shrink: values.region.AccountStateRegion !== '',
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
              label="City"
              variant="outlined"
              value={values.city.AccountCity}
              onChange={handleChange('city')}
              fullWidth
              InputLabelProps={{
                shrink: values.city.AccountCity !== '',
              }}
            />
            <TextField
              label="Zip/Code"
              variant="outlined"
              value={values.zipCode.AccountZipCode}
              onChange={handleChange('zipCode')}
              fullWidth
              InputLabelProps={{
                shrink: values.zipCode.AccountZipCode !== '',
              }}
            />
          </Typography>

          <Stack flexDirection='column' gap='24px' alignItems='flex-end' >
          <TextField
            label="About"
            variant="outlined"
            multiline
            rows={3}
            value={values.about.AccountAbout}
            onChange={handleChange('about')}
            fullWidth
          />
          <Button variant='contained' >
            Save Changes
          </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
