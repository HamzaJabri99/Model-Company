import React, { useEffect, useState } from "react";
import Intro from "../Components/Intro";
import Banner from "../Components/Banner";
import Cases from "../Components/Cases";
import gsap from "gsap";

//Animation
let tl = gsap.timeline();
const IntroAnimation = (completeAnimation) => {
  tl.from(".line span", 1.6, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(".case-image img", 1.6, {
      scale: 1.5,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};
const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
    console.log("Animation is done");
  };
  useEffect(() => {
    //timeLine Animation
    IntroAnimation(completeAnimation);
  }, []);
  return (
    <>
      {animationComplete === false ? <Intro /> : ""}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
