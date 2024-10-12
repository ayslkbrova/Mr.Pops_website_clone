import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const Marquee = () => {
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
    <div className="write">
      <section className="marquee">
        <div className="marquee_inner">
          <div className="marquee_part filled-text" id='marque'>Natural products *</div>
          <div className="marquee_part outlined-text" id='marque'>Natural products *</div>
          <div className="marquee_part filled-text" id='marque'>Natural products *</div>
          <div className="marquee_part outlined-text" id='marque'>Natural products *</div>
          <div className="marquee_part filled-text" id='marque'>Natural products *</div>
        </div>

        <div className="marquee__inner">
          <div className="marquee__part filled-text">A Bright Map of tastes *</div>
          <div className="marquee__part outlined-text">A Bright Map of tastes *</div>
          <div className="marquee__part filled-text">A Bright Map of tastes *</div>
        </div>

        <div className="marquee_inner">
          <div className="marquee_part filled-text">Natural products *</div>
          <div className="marquee_part filled-text">Natural products *</div>
          <div className="marquee_part outlined-text">Natural products *</div>
          <div className="marquee_part filled-text">Natural products *</div>
          <div className="marquee_part outlined-text">Natural products *</div>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
