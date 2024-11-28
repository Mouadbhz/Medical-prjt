import { Helmet } from 'react-helmet-async';

import AdminDashboardView from 'src/sections/aboutus-section/view/aboutus';

// ----------------------------------------------------------------------

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us </title>
      </Helmet>

      <AdminDashboardView />
    </>
  );
}
