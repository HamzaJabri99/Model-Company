import React, { useEffect } from "react";
import Banner from "./Components/Banner";
import Cases from "./Components/Cases";
import Header from "./Components/Header";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    //making it responsive and taking 50vh from the page on mobile devices
    //handling device and browser-specific
  });
  return (
    <div className="App ">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
