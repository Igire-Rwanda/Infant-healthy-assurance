import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/index";
import Register from "../../Pages/register";
import Appointment from "../../Pages/Appointment";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Index;
