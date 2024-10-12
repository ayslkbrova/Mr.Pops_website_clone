import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import sifirImage from "../assets/icons/sifir.svg";
import AboutIntroMedia from "../components/About/AboutIntroMedia";
import AboutContent from "../components/About/AboutContent";
import SvgPathFirst from "../components/About/SvgPathFirst";
import SvgPathSecond from "../components/About/SvgPathSecond";
import SvgPathThird from "../components/About/SvgPathThird";
import SvgPathFourth from "../components/About/SvgPathFourth";
import AnimateScrollImage from "../components/About/AnimateScrollImage";
import { Helmet } from "react-helmet";



gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const animateImageOnPath = (pathId, triggerId) => {
      gsap.to("#animatedImage", {
        scrollTrigger: {
          trigger: triggerId,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        motionPath: {
          path: pathId,
          align: pathId,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          offsetX: 2,
          offsetY: 2,
        },
        scale: 1.5,
      });
    };

    animateImageOnPath("#path1", "#path1");
    animateImageOnPath("#path2", "#path2");
    animateImageOnPath("#path3", "#path3");
    animateImageOnPath("#path4", "#path4");
  }, []);

  return (
    <div id="about">
      <Helmet>
        <title>About us</title>
      </Helmet>
      <AboutContent />
      <AboutIntroMedia />
      <div className="svg-container">
        <SvgPathFirst />
        <SvgPathSecond />
        <SvgPathThird />
        <SvgPathFourth />
      </div>
      <AnimateScrollImage />
    </div>
  );
};

export default About;
