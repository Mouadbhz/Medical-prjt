import { Helmet } from 'react-helmet-async';

import { ScoreView } from 'src/sections/patient-section/score/view';

// ----------------------------------------------------------------------

export default function ScorePage() {
  return (
    <>
      <Helmet>
        <title> Score | Dashboard </title>
      </Helmet>

      <ScoreView />
    </>
  );
}
