import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heder from "./components/Heder/Heder";
import Futer from "./components/Futer/Futer";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Heder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Futer />
    </BrowserRouter>
  );
}

export default App;
