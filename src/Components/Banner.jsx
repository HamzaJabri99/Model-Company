import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Making You a Great Model is</span>
            </div>
            <div className="line">
              <span>What we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/about">
              More About us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
