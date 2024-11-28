import { Helmet } from 'react-helmet-async';

import AdminDashboardView from 'src/sections/admin-section/admin-overview/view/admin-view';

// ----------------------------------------------------------------------

export default function AdminDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Patient | Dashboard </title>
      </Helmet>

      <AdminDashboardView />
    </>
  );
}
