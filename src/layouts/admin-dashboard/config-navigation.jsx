import SvgColor from 'src/components/svg-color';



// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: 'admin/dashboard',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'patients',
    path: 'admin/patients',
    icon: icon('ic_profile'),
  },
  {
    title: 'Doctors',
    path: 'admin/doctors',
    icon: icon('ic_doctor'),
  },
  {
    title: 'doctor',
    path: 'doctor/dashboard',
    icon: icon(),
  },
  {
    title: 'patient',
    path: '/',
    icon: icon(),
  }
];

export default navConfig;
