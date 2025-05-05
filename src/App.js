import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import MainProfilePage from "./components/MainProfilePage/MainProfilePage";
import PatientProfile from "./components/PatientProfile/PatientProfile";
import Panel from "./components/Panel/Panel";
import ControlDashboard from "./components/ControlDashboard/ControlDashboard";
import Admission from "./components/Admission/Admission";
import Appointment from "./components/Appointment/Appointment";
import AppointmentDetails from "./components/AppointmentDetails/AppointmentDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserDataContextProvider } from "./contexts/UserDataContent";
import "./App.css";
import HealthCondition from "./components/HealthCondition/HealthCondition";
import HealthConditionDetails from "./components/HealthConditionDetails/HealthConditionDetails";
import MedicalHistory from "./components/MedicalHistory/MedicalHistory";
import MedicalHistoryDetails from "./components/MedicalHistoryDetails/MedicalHistoryDetails";
import Plan from "./components/Plan/Plan";
import PlanDetails from "./components/PlanDetails/PlanDetails";
import HealthTracker from "./components/HealthTracker/HealthTracker";
import HealthTrackrDetails from "./components/HealthTrackerDetails/HealthTrackerDetails";
import Prescriptions from "./components/Admission/Prescriptions/Prescriptions";
import Invoice from "./components/Invoice/Invoice";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";

function App() {
  const location = useLocation();
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <UserDataContextProvider>
        <QueryClientProvider client={queryClient}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Login />} />
            <Route path="/panel" element={<Panel />}>
              <Route path="/panel/profile-page" element={<MainProfilePage />} />
              <Route path="/panel/profile" element={<PatientProfile />} />
              <Route path="/panel/admission" element={<Admission />} />
              <Route path="/panel/appointment" element={<Appointment />} />
              <Route
                path="/panel/health-condition"
                element={<HealthCondition />}
              />
              <Route
                path="/panel/medical-history"
                element={<MedicalHistory />}
              />
              <Route
                path="/panel/medical-history/:id"
                element={<MedicalHistoryDetails />}
              />
              <Route
                path="/panel/appointment-details/:id"
                element={<AppointmentDetails />}
              />
              <Route
                path="/panel/health-condition/:id"
                element={<HealthConditionDetails />}
              />
              <Route path="/panel/plan" element={<Plan />} />
              <Route path="/panel/health-tracker" element={<HealthTracker />} />
              <Route
                path="/panel/health-tracker-details/:id"
                element={<HealthTrackrDetails />}
              />
              <Route
                path="/panel/control-dashboard"
                element={<ControlDashboard />}
              />
              <Route
                path="/panel/prescriptions/:id"
                element={<Prescriptions />}
              />
              <Route path="/panel/plan-details/:id" element={<PlanDetails />} />
              <Route path="/panel/invoice" element={<Invoice />} />
              <Route
                path="/panel/invoice-details/:id"
                element={<InvoiceDetails />}
              />
            </Route>
          </Routes>
        </QueryClientProvider>
      </UserDataContextProvider>
    </div>
  );
}

export default App;
