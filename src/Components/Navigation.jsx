import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link to="/approach">Approach</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact us</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link to="/contact">Get in touch with us</Link>
                </li>
                <li>
                  <Link to="/consultation">get a free consultation</Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Location</li>
                <li>Ave Mohammed V</li>
                <li>8080 Rabat</li>
                <li>Morocco</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+212 6 22 36 13 84</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
