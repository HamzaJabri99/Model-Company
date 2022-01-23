import React, { useEffect } from "react";
import gsap from "gsap";
import Header from "./Components/Header";
import "./styles/App.scss";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import CaseStudies from "./Pages/CaseStudies";
import Approach from "./Pages/Approach";
import Services from "./Pages/Services";
import About from "./Pages/About";
function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    //making it responsive and taking 50vh from the page on mobile devices
    //handling device and browser-specific
    //making flashes dissapear
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });
  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
