import React, { useState, useEffect } from "react";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";
import gsap from "gsap";

const Header = ({ dimension, setMenu }) => {
  useEffect(() => {});
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
            <div className="hamburger-menu-close">
              <UpArrow onClick={() => setMenu(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
