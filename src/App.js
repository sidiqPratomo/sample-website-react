import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./component/pages/Home";
import Services from "./component/pages/Services";
import SignUp from "./component/pages/SignUp";
import Products from "./component/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
