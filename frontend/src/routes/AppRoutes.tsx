import { Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      {/* Catch-All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}