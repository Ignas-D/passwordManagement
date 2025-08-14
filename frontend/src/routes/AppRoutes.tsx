import {Routes, Route} from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound.tsx";
import SignUp from "../pages/SignUp.tsx"

export default function AppRoutes() {
  return (
      <Routes>
      {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />}/>
      {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
  );
}