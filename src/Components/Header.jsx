import React, { useState, useEffect } from "react";

import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";
import gsap from "gsap";

let tl = gsap.timeline();
const Header = ({ dimension }) => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu === true) {
      gsap.to("nav", { display: "block" });
      gsap.to("body", { overflow: "hidden" });
      tl.to(".App", {
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
        })
        .to("nav", {
          css: {
            display: "none",
          },
        });
    }
  }, [menu]);
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">MODEL.inc</a>
          </div>
          <div className="nav-toggle">
            <div onClick={() => setMenu(true)} className="hamburger-menu">
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenu(false)}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
