import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
