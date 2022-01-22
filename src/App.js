import React, { useEffect } from "react";
import gsap from "gsap";
import Banner from "./Components/Banner";
import Cases from "./Components/Cases";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    //making it responsive and taking 50vh from the page on mobile devices
    //handling device and browser-specific
    //making flashes dissapear
    gsap.to("body", 0, { css: { visibility: "visible" } });
    //timeLine Animation
    const tl = gsap.timeline();
    tl.from(".line span", 1.6, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".intro-overlay", 1, { css: { display: "none" } })
      .from(".case-image img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
          amount: 0.4,
        },
      });
  });
  return (
    <div className="App ">
      <Intro />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
