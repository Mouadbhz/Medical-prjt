import { Helmet } from 'react-helmet-async';

import ProfileView from 'src/sections/patient-section/profile/view/profile-view';

// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> Profile | Minimal UI </title>
      </Helmet>

      <ProfileView />
    </>
  );
}