import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import UserDashboard from "../componentes/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";

const AppRoutes = () => {
  const role = localStorage.getItem("role");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {role === "user" && <Route path="/user-dashboard" element={<UserDashboard />} />}
        {role === "admin" && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
