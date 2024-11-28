import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Popover, useMediaQuery } from '@mui/material';

import { primary } from 'src/theme/palette';

import QuestionCard from '../question-Cards';

// ----------------------------------------------------------------------

export default function QuestionnaireView() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const getPopoverStyle = () => {
    if (isXs) {
      return {
        mt: 21,
        ml: 2,
        px: 3,
        width: '95%',
        height: 450,
        borderRadius: 3,
      };
    }
    if (isSm) {
      return {
        mt: 8,
        ml: 14,
        px: 4,
        width: '70%',
        height: 490,
        borderRadius: 3,
      };
    }
    if (isMd) {
      return {
        mt: 7,
        ml: 15,
        px: 5,
        width: '75%',
        height: 520,
        borderRadius: 3,
      };
    }
    if (isLg) {
      return {
        mt: 7,
        ml: 15,
        px: 5,
        width: '80%',
        height: 550,
        borderRadius: 3,
        backgroundColor: primary,
      };
    }
    // Default style for any other case
    return {
      mt: 9,
      ml: 12,
      width: '75%',
      height: 530,
      borderRadius: 3,
    };
  };

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Questionaire
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={500}
        sx={{
          borderRadius: '15px',
        }}
      >
        {!open && (
          <Button variant="contained" color="primary" size="large" onClick={handleOpen}>
            Start questionnaire
          </Button>
        )}

        <Popover
          open={!!open}
          anchorEl={open}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: '50%', left: '50%' }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          PaperProps={{
            sx: getPopoverStyle(),
          }}
        >
          <QuestionCard onClose={handleClose} />
        </Popover>
      </Grid>
    </Container>
  );
}
