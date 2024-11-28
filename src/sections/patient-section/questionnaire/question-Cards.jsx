import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Grid from '@mui/material/Grid';

import Score from './Score';
import Questions from './Questions';


export default function QuestionCard({ closeQst }) {
  const [showQuestions, setshowQuestions] = useState(true);
  const [showScore, setshowScore] = useState(false);

  const [score, setScore] = useState(0);

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100%',
      }}
    >
      {showQuestions && (
        <Questions
          score={score}
          setScore={setScore}
          setshowQuestions={setshowQuestions}
          setshowScore={setshowScore}
        />
      )}
      {showScore && (
        <Score
          score={score}
        />
      )}
    </Grid>
  );
}

QuestionCard.propTypes = {
  closeQst: PropTypes.func.isRequired,
};
