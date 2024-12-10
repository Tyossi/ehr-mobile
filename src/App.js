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
                path="/panel/appointment-details/:id"
                element={<AppointmentDetails />}
              />
              <Route
                path="/panel/control-dashboard"
                element={<ControlDashboard />}
              />
            </Route>
          </Routes>
        </QueryClientProvider>
      </UserDataContextProvider>
    </div>
  );
}

export default App;
