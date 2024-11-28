import { Helmet } from "react-helmet-async";

import PatientProfileView from 'src/sections/doctor-section/patient-profile/view/patient-profile-view';

// import DoctorDashboardView from 'src/sections/doctor-section/doctor-overview/view/dashboard-view';

export default function PatientProfilePage () {
  return (
    <>
    <Helmet>
      <title>Patient Profile | Dashboard</title>
    </Helmet>

    <PatientProfileView />
    </>
  );
}