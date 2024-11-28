import { Helmet } from 'react-helmet-async';

import { SettingsView } from 'src/sections/patient-section/settings/view';

// ----------------------------------------------------------------------

export default function SettingsPage() {
  return (
    <>
      <Helmet>
        <title> Settings | Dashboard </title>
      </Helmet>

      <SettingsView />
    </>
  );
}