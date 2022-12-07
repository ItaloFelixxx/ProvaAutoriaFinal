import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./routes/Home";
import Navbar from "./routes/Navbar"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/Navbar',
    element: <Navbar/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
