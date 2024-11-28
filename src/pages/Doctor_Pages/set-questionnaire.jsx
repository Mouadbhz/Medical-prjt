import { Helmet } from "react-helmet-async";

import SetQuestionnaireView from 'src/sections/doctor-section/set-questionnaire/view/set-questionnaire';

export default function ScorePatientPage () {
  return(
    <>
    <Helmet>
      Set Questionnaire | Dashboard
    </Helmet>
    
    <SetQuestionnaireView />
    </>
  );
}