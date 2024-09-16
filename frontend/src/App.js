import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ResourceSharing from "./components/ResourceSharing";
import NavBar from "./components/NavBar";
import Forms from "./components/Forms";
import Appointment from "./components/Appointement";
import Records from "./components/Records";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";


function App() {
  const myWidth = 220;
  return (
    <div className="App">
      <Routes>
        {/* Login route (unprotected) */}
        <Route path="/login" element={<Login />} />

        {/* Wrap NavBar with ProtectedRoute */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
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
      </Routes>
    </div>
  );
}

export default App;
