import React, { useEffect, useState } from 'react';
import TrailingBackground from './assets/img/trailing_1920x0_479.webp'
import Marque from "../Marque";
const MatrixScrollImage = () => {
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = 500; 
      const newScaleFactor = Math.max(1 - scrollTop / maxScroll, 0.5); 
      setScaleFactor(newScaleFactor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scaleMatrix = `matrix(${scaleFactor}, 0, 0, ${scaleFactor}, 0, 0)`;

  return (
    <div className="second_matrix_wrapper" style={{ height: '200vh', display: 'flex', justifyContent: 'center', alignItems: 'center',zIndex:'1000' }}>
      <img
        id="scroll-image"
        src={TrailingBackground}
        alt="Scroll Image"
        style={{
          width: '100%',
          transform: scaleMatrix,
          transition: 'transform 0.1s ease-out',
        }}
      />
       <Marque />
    </div>
  );
};

export default MatrixScrollImage;
