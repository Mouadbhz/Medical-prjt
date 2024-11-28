import SvgColor from 'src/components/svg-color';



// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'rank',
    path: 'patient/rank',
    icon: icon('ic_rank'),
  },
  {
    title: 'score',
    path: 'patient/score',
    icon: icon('ic_score'),
  },
  {
    title: 'questionnaire',
    path: 'patient/questionnaire',
    icon: icon('ic_questionnaire'),
  },
  {
    title: 'landing page',
    path: 'landingPage',
    icon: icon(),
  },
  {
    title: 'doctor',
    path: 'doctor/dashboard',
    icon: icon(),
  },
  {
    title: 'admin',
    path: 'admin/dashboard',
    icon: icon(),
  }
];

export default navConfig;
