import { Helmet } from 'react-helmet-async';

import LandingPageView from 'src/sections/landing-page-section/view/landing-page';

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Landing Page </title>
      </Helmet>

      <LandingPageView />
    </>
  );
}
