import React, { useEffect } from "react";

const CaseStudies = ({ setMenu }) => {
  useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>CaseStudies</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            expedita impedit, rem quasi minus fugiat sunt cupiditate velit,
            magni, accusantium sapiente quae totam sequi eligendi numquam non
            labore facilis nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
