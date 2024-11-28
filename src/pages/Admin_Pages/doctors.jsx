import { Helmet } from "react-helmet-async";

import DoctorsView from 'src/sections/admin-section/doctors/view/doctors-view';

export default function DoctorsPage (){
  return(
    <>
    <Helmet>
      Doctors | Dashboard
    </Helmet>

    <DoctorsView />
    </>
  );
}