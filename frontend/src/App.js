import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ResourceSharing from "./components/ResourceSharing";
import NavBar from "./components/NavBar";
import NavBarStudent from "./components/NavBarStudent";
import NavBarPsych from "./components/NavBarPsych";
import Forms from "./components/Forms";
import Appointment from "./components/Appointment";
import Records from "./components/Records";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import StudentAppointment from "./components/StudentAppointment";

function App() {
  const myWidth = 220;
  return (
    <div className="App">
      <Routes>
        {/* Login route (unprotected) */}
        <Route path="/" element={<Login />} />

        {/* Wrap NavBar with ProtectedRoute */}
        <Route
          path="/counselor/*"
          element={
            <ProtectedRoute role={"counselor"}>
              <NavBar
                drawerWidth={myWidth}
                content={
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/resourcesharing" element={<ResourceSharing />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/records" element={<Records />} />
                  </Routes>
                }
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/*"
          element={
            <ProtectedRoute role={"student"}>
              <NavBarStudent
                drawerWidth={myWidth}
                content={
                  <Routes>
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/studentappointment" element={<StudentAppointment />} />
                    <Route path="/records" element={<Records />} />
                  </Routes>
                }
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/psychometrician/*"
          element={
            <ProtectedRoute role={"psychometrician"}>
              <NavBarPsych
                drawerWidth={myWidth}
                content={
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/resourcesharing" element={<ResourceSharing />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/records" element={<Records />} />
                  </Routes>
                }
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
