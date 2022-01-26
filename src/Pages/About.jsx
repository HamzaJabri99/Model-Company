import React, { useEffect } from "react";

const About = ({ setMenu }) => {
  useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>About Page</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
