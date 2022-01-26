import React, { useEffect } from "react";

const Approach = ({ setMenu }) => {
  useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>Approach Page</h3>
        </div>
      </div>
    </div>
  );
};

export default Approach;
