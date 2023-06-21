import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Doctordashboard from "./Pages/Doctordashboard";
import Healthcare from "./Pages/Healthcare";
import Registration from "./Pages/register";
import Healthinfo from './Pages/Healthinfo';

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Doctordashboard />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path:"/healthcareinfo",
    element:<Healthcare/>
  },
  {
    path:"/healthcare",
    element:<Healthinfo/>
  }

])
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
