import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./routes/Home";
import CardDescription from "./routes/CardDescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/CardDescription',
    element: <CardDescription/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <RouterProvider router={router} />

);
