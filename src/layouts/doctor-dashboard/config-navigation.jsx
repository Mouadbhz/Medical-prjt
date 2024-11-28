import SvgColor from 'src/components/svg-color';



// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: 'doctor/dashboard',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'patient profiles',
    path: 'doctor/patientProfile',
    icon: icon('ic_profile'),
  },
  {
    title: 'patient score',
    path: 'doctor/patientScore',
    icon: icon('ic_score'),
  },
  {
    title: 'set questionnaire',
    path: 'doctor/setQuestionnaire',
    icon: icon('ic_questionnaire'),
  },
  {
    title: 'about us',
    path: 'aboutUs',
    icon: icon('ic_questionnaire'),
  },
  {
    title: 'patient',
    path: '/',
    icon: icon(),
  },
  {
    title: 'admin',
    path: 'admin/dashboard',
    icon: icon(),
  }
];

export default navConfig;
