import { Helmet } from 'react-helmet-async';

import { QuestionnaireView } from 'src/sections/patient-section/questionnaire/view';

// ----------------------------------------------------------------------

export default function QuestionnairePage() {
  return (
    <>
      <Helmet>
        <title> Questionnaire | Dashboard </title>
      </Helmet>

      <QuestionnaireView />
    </>
  );
}