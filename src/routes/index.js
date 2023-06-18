import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Index";
import DoctorLogin from "../Pages/DoctorLogin";
import DoctorSignUp from "../Pages/DoctorSignUp";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<DoctorLogin />} />
      <Route path="/sign-up" element={<DoctorSignUp />} />
    </Routes>
  );
}

export default Index;
