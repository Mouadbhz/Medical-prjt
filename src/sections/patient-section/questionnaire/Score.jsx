import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { account } from 'src/Data/account';

export default function Score({ score }) {
    account.score = score;
  return (
    <Grid
      container
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '95%',
      }}
    >
      <Typography variant="h2" color="initial">
        {account.displayName}
      </Typography>
      <Typography variant="h3" color="initial">
        Your Score :
      </Typography>
      <Typography variant="h2" color="primary">
        {score} {console.log('final Score')}
        {console.log(score)} {console.log("account score")} { console.log(account.score)}
      </Typography>
    </Grid>
  );
}
Score.propTypes = {
  score: PropTypes.number,
};
