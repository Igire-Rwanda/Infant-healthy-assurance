import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/index";
import Register from "../../Pages/register";
import BroadcastingPage from "../../Pages/BroadcastingPage";
import Page3 from "../Bloadcast-page/page3";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/broadcastingpage" element={<BroadcastingPage/>}/>
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
}

export default Index;
