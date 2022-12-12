import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./routes/Home"
import Header from "./components/navbar/Navbar";
import CardDescription from "./routes/CardDescription";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/CardDescription/:index" element={<CardDescription/>} />
    </Routes>
  </BrowserRouter>
);