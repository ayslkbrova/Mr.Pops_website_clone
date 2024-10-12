import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const MarqueIcwCream = ({text}) => {
  useEffect(() => {
    
    gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.wrap(-40, 0) 
      }
    }).totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });

    
    gsap.to(".marquee_part", {
      xPercent: 100,
      repeat: -1,
      duration: 10,
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.wrap(0, 100)
      }
    }).totalProgress(0.5);

    gsap.set(".marquee_inner", { xPercent: -50 });
  }, []);

  return (
    <div className="marque_ice_cream_detail">
      <section className="marquee">
    

        <div className="marquee__inner">
          <div className="marquee__part filled-text">{text}</div>
          <div className="marquee__part outlined-text">{text}</div>
          <div className="marquee__part filled-text">{text}</div>
          <div className="marquee__part outlined-text">{text}</div>
          <div className="marquee__part filled-text">{text}</div>
          <div className="marquee__part outlined-text">{text}</div>
        </div>

       
      </section>
    </div>
  );
};

export default MarqueIcwCream;