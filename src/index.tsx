import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./screens/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./screens/contact";
import Station from "./screens/station";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/station/:stationId/:method",
    element: <Station />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
