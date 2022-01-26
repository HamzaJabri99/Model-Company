import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
let tl = gsap.timeline();
function App() {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [menu, setMenu] = useState(false);
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

    if (menu === true) {
      tl.to("body", { duration: 0.01, overflow: "hidden" })
        .to(".App", {
          duration: 1,
          y: dimension.width <= 654 ? "85vh" : (dimension.height / 3) * 2.1,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })

        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          display: "block",
        });
    } else {
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo-inOut",
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu-close", {
          display: "none",
        })
        .to("body", {
          css: {
            overflow: "auto",
          },
        });
    }
    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [menu]);
  return (
    <>
      <Header dimension={dimension} setMenu={setMenu} />

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/case-studies"
              element={<CaseStudies setMenu={setMenu} menu={menu} />}
            />
            <Route path="/approach" element={<Approach setMenu={setMenu} />} />
            <Route path="/services" element={<Services setMenu={setMenu} />} />
            <Route path="/about" element={<About setMenu={setMenu} />} />
          </Routes>
        </div>
        <Navigation setMenu={setMenu} menu={menu} />
      </Router>
    </>
  );
}

export default App;
