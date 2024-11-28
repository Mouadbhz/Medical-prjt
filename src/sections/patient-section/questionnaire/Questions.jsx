import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { questions } from 'src/Data/questions';





export default function Questions({
  score,
  setScore,
  setshowQuestions,
  setshowScore
}) {

  console.log(questions[1]);

  const handleClick = (isCorrect) => {
    if (questionIndex < 29) {
      setScore((prevScore) => (isCorrect ? prevScore : prevScore + 0.25));
      setquestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setScore((prevScore) => (isCorrect ? prevScore : prevScore + 0.25));
      if (questionIndex === 29) {
        setshowQuestions(false);
        setshowScore(true);
      }
    }
  };

  const [questionIndex, setquestionIndex] = useState(0);
  return (
    <Grid
      container
      display="flex"
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        height: '95%',
      }}
    >
      <Typography variant="h4" color="initial">
        Question{' '}
        <Typography variant="h4" color="initial" display="inline">
          {' '}
          {questionIndex + 1 }{' '}
        </Typography>
      </Typography>
      <Typography variant="h5" color="initial" textAlign="center">
        {questions[questionIndex].questionText}
      </Typography>

      {questions[questionIndex].answers.map((answer , index) => (
        <Button 
        variant="contained" 
        color="primary" 
        size="large"
        sx={{
          width:"60%"
        }}
        onClick={() => handleClick(answer.correctAnswer)}
        key={index}   
        >
          {answer.answerText}
          {console.log("score :")}
          {console.log(score)}
        </Button>

      ))}
      
    </Grid>
  );
}
Questions.propTypes = {
  setshowQuestions : PropTypes.bool,
  setshowScore : PropTypes.bool,
  setScore : PropTypes.number,
  score : PropTypes.number,
};