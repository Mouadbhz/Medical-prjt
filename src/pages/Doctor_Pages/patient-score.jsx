import { Helmet } from "react-helmet-async";

import PatientScoreView from 'src/sections/doctor-section/patient-score/view/patient-score-view';

export default function ScorePatientPage () {
  return(
    <>
    <Helmet>
      Patient Score | Dashboard
    </Helmet>
    <PatientScoreView />
    </>
  );
}