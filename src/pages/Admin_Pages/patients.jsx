import { Helmet } from "react-helmet-async";

import PatientsView from 'src/sections/admin-section/patients/view/patients-view';

export default function PatientsPage () {
  return(
    <>
    <Helmet>
      Admin | Dashboard
    </Helmet>

     <PatientsView />
    </>
  );
}