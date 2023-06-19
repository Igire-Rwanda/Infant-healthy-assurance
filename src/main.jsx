import React from "react";
import ReactDOM from "react-dom";
import Index from "./Pages/Index.jsx";
import DoctorLogin from "./Pages/DoctorLogin.jsx";
import DoctorSignUp from "./Pages/DoctorSignUp.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <DoctorLogin />,
  },
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Sign-up",
    element: <DoctorSignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
