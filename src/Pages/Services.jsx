import React, { useEffect } from "react";
const Services = ({ setMenu }) => {
  useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>Services</h3>
        </div>
      </div>
    </div>
  );
};
export default Services;
