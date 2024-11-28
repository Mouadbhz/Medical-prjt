import { Helmet } from "react-helmet-async";

 import DoctorDashboardView from 'src/sections/doctor-section/doctor-overview/view/dashboard-view';

export default function DoctorDashboardPage(){
  return(
    <>
    <Helmet>
      <title>Doctor | Dashboard</title>
    </Helmet>
     <DoctorDashboardView />
    </>
  );
}