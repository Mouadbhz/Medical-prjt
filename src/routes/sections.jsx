import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import AdminDashboardLayout from 'src/layouts/admin-dashboard';
import DoctorDashboardLayout from 'src/layouts/doctor-dashboard';
import PatientDashboardLayout from 'src/layouts/patient-dashboard';

// ------------------Landing Page-----------------------------------

export const AboutUsPage = lazy(() => import('src/pages/about_us-page'));
export const LandingPage = lazy(() => import('src/pages/landing-page'));

// ------------------Admin Dashboard---------------------------------

export const AdminDashboardPage = lazy(() => import('src/pages/Admin_Pages/admin-dashboard'));
export const PatientsPage = lazy(() => import('src/pages/Admin_Pages/patients'));
export const DoctorsPage = lazy(() => import('src/pages/Admin_Pages/doctors'));

// ------------------Patient Dashboard--------------------------------------


export const IndexPage = lazy(() => import('src/pages/Patient_Pages/patient-dashboard'));
export const PatientScorePage = lazy(() => import('src/pages/Patient_Pages/score'));
export const PatientRankPage = lazy(() => import('src/pages/Patient_Pages/rank'));
export const PatientQuestionnairePage = lazy(() => import('src/pages/Patient_Pages/questionnaire'));
export const PatientProfilePage = lazy(() => import('src/pages/Patient_Pages/profile'));
export const PatientSettingsPage = lazy(() => import('src/pages/Patient_Pages/settings'));

// ------------------Doctor Dashboard---------------------------------------------------------


export const DoctorDashboardPage = lazy(() => import('src/pages/Doctor_Pages/doctor-dashboard'));
export const DoctorProfilePage = lazy(() => import('src/pages/Doctor_Pages/profile'));
export const DoctorSettingsPage = lazy(() => import('src/pages/Doctor_Pages/settings'));
export const DoctorPatientProfilePage = lazy(() => import('src/pages/Doctor_Pages/patient-profile'));
export const DoctorPatientScorePage = lazy(() => import('src/pages/Doctor_Pages/patient-score'));
export const DoctorSetQuestionnairePage = lazy(() => import('src/pages/Doctor_Pages/set-questionnaire'));

export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    { path: 'aboutUs', exact: true, element: <AboutUsPage /> },
    { path: 'landingPage', exact: true, element: <LandingPage /> },
    {
      element: (
        <PatientDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </PatientDashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'patient/rank', exact: true , element: <PatientRankPage /> },
        { path:'patient/questionnaire' , exact: true , element: <PatientQuestionnairePage />},
        { path: 'patient/score', exact: true , element: <PatientScorePage /> },
        { path: 'patient/profile', exact: true , element: <PatientProfilePage />},
        { path: 'patient/settings', exact: true , element: <PatientSettingsPage />},
        
      ],
    },
    {
      element: (
        <DoctorDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DoctorDashboardLayout>
      ),
      children: [
        { path:'doctor/dashboard' , exact: true , element: <DoctorDashboardPage />},
        { path: 'doctor/profile' , exact: true , element: <DoctorProfilePage />},
        { path: 'doctor/settings' , exact: true , element: <DoctorSettingsPage />},
        { path: 'doctor/patientProfile' , exact: true , element: <DoctorPatientProfilePage />},
        { path: 'doctor/patientScore' , exact: true , element: <DoctorPatientScorePage />},
        { path: 'doctor/setQuestionnaire' , exact: true , element: <DoctorSetQuestionnairePage />},
        // { path: 'aboutUs' , exact: true , element: <AboutUsPage />},
      ],
    },
    {
      element: (
        <AdminDashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AdminDashboardLayout>
      ),
      children: [
        { path:'admin/dashboard' , exact: true , element: <AdminDashboardPage />},
        { path:'admin/patients' , exact: true , element: <PatientsPage />},
        { path:'admin/doctors' , exact: true , element: <DoctorsPage />},        
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
