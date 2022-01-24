import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import CaseStudies from "./Pages/CaseStudies";
import Approach from "./Pages/Approach";
import Services from "./Pages/Services";
import About from "./Pages/About";

//------------
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
function App() {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    //making it responsive and taking 50vh from the page on mobile devices
    //handling device and browser-specific
    let vh = dimension.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    //making flashes disappear
    gsap.to("body", 0, { css: { visibility: "visible" } });
    //-------------------------------------

    const debounceHandleResize = debounce(function handleResize() {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debounceHandleResize);
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  });
  return (
    <>
      <Header dimension={dimension} />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
