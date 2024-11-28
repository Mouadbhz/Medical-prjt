import { Helmet } from 'react-helmet-async';

import { PatientDashboardView } from 'src/sections/patient-section/patient-overview/view';

// ----------------------------------------------------------------------

export default function PatientDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Patient | Dashboard </title>
      </Helmet>

      <PatientDashboardView />
    </>
  );
}
