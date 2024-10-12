import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import marquee1 from '../../assets/img/marquee1.webp';
import marquee2 from '../../assets/img/marquee2.webp';
import marquee3 from '../../assets/img/marquee3.webp';
import marquee4 from '../../assets/img/marquee4.webp';


const Carousel = () => {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = carousel.querySelectorAll('.item');
    const itemWidth = items[0].offsetWidth;
    const totalWidth = itemWidth * items.length;

   
    const cloneItems = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const requiredItems = Math.ceil(containerWidth / itemWidth) + 1;
      for (let i = 0; i < requiredItems; i++) {
        items.forEach(item => {
          const clone = item.cloneNode(true);
          carousel.appendChild(clone); 
        });
      }
    };

    cloneItems(); 

    
    const animateCarousel = () => {
      gsap.to(carousel, {
        x: `-=${totalWidth}`, 
        duration: 35, 
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const num = parseFloat(x);
            return num <= -totalWidth ? 0 : x; 
          }
        }
      });
    };

    animateCarousel(); 
  }, []);

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="carousel" ref={carouselRef}>
        <div className="item">
          <img src={marquee1} alt="" className="left" />
        </div>
        <div className="item">
          <img src={marquee2} alt="" className="right" />
        </div>
        <div className="item">
          <img src={marquee3} alt="" className="left" />
        </div>
        <div className="item">
          <img src={marquee4} alt="" className="right" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
