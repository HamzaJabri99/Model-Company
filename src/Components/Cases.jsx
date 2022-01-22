import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
const Cases = () => {
  const caseStudies = [
    {
      id: 1,
      subtitle: "Curology",
      title: "A Custom formula for your skin's unique needs",
      img: "curology-min",
    },
    {
      id: 2,
      subtitle: "YourSpace",
      title: "A Custom formula for your skin's unique needs",
      img: "yourspace-min",
    },
    {
      id: 3,
      subtitle: "Lumin",
      title: "A Custom formula for your skin's unique needs",
      img: "lumin-min",
    },
  ];
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((item) => (
            <div className="case" key={item.id}>
              <div className="case-details">
                <span>{item.subtitle}</span>
                <h2>{item.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${item.img}.png`)}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
