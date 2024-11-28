import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';

import { Box, Grid, Stack, Typography } from '@mui/material';

import { questions } from 'src/Data/questions';

import SvgColor from 'src/components/svg-color';

export default function FAQPatientProfile({ selectedPatient }) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  console.log(questions[1]);

  //----------------------------------------------------------------------
  const [HaveQuestionnaire, setHaveQuestionnaire] = useState(false);

  useEffect(() => {
    if (selectedPatient.questionnaire_answers.length > 0) {
      console.log('Hello, I have questionnaire answers');
      setHaveQuestionnaire(true);
    }
  }, [selectedPatient.questionnaire_answers]);
  /*
    let FAQS;
    if(selectedPatient.questionnaire_answers.length > 0){
      let QSTnumber = 1;
      let arrayLength = selectedPatient.questionnaire_answers.length;


    }
*/
  if (selectedPatient.questionnaire_answers.length > 0) {
    console.log(selectedPatient.questionnaire_answers);
    console.log('for loop');
    for (let i = 0; i < selectedPatient.questionnaire_answers.length; i += 1) {
      console.log(selectedPatient.questionnaire_answers[i]);
    }
  }

  const haveQST = (
    <Stack my={3}>
      <Typography variant="h4" color="initial" textAlign="center">
        {selectedPatient.name}
      </Typography>
      <Stack>
        {selectedPatient.questionnaire_answers.map((item, index) => (
          <>
            <Typography variant="h3" color="primary" textAlign="center" mt={3}>
              Qestionnaire: {index + 1}{' '}
            </Typography>
            <Typography variant="h6" color="secend" textAlign="center" mb={3}>
              {formattedDate}
            </Typography>
            {item.map((innerItem, innerIndex) => (
              <Box key={innerIndex}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{
                    px: 2,
                    py: 1,
                  }}
                >
                  Question {innerIndex + 1} : {questions[innerIndex].questionText}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    borderRadius: '14px',
                    backgroundColor: '#ebebeb',// #ebebeb   #7c848b
                    px: 5,
                    py:1,
                  }}
                >
                  <Box sx={{display:'inline-block',position:'relative'}}><SvgColor src="/assets/icons/ic_bottom_right.svg" sx={{ width: 24, height: 24 ,color:'#1877F2' ,  transform: 'rotate(90deg)',position:'absolute',top:'-17px'}} /></Box>
                     <Typography variant="h6" sx={{color: '#637381' , display:'inline-block', paddingLeft:'35px'}}>{innerItem}</Typography>
                </Typography>
              </Box>
            ))}
            <Typography variant="h4" color="initial" textAlign='center' > Score : {selectedPatient.score[index]}</Typography>
          </>
        ))}
      </Stack>
    </Stack>
  );
  const havenoteQST = (
    <Stack my={3}>
      <Typography variant="h3" color="initial" textAlign="center" p={3}>
        {selectedPatient.name}
      </Typography>

      <Typography variant="h4" color="primary" textAlign="center" p={3}>
        This patient didn&apos;t pass the questionnaire
      </Typography>
      <Typography variant="h6" color="primary" textAlign='center'>he / she will get it soon</Typography>
    </Stack>
  );

  return (
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
        borderRadius: '16px',
        boxShadow:
          'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
        rowGap: '20px',
      }}
    >
      {HaveQuestionnaire ? <>{haveQST}</> : <>{havenoteQST}</>}
    </Grid>
  );
}

FAQPatientProfile.propTypes = {
  selectedPatient: PropTypes.object,
};
