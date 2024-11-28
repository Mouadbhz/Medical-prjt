import { Helmet } from 'react-helmet-async';

import { RankView } from 'src/sections/patient-section/rank/view';

// ----------------------------------------------------------------------

export default function RankPage() {
  return (
    <>
      <Helmet>
        <title> Rank | Dashboard </title>
      </Helmet>

      <RankView />
    </>
  );
}