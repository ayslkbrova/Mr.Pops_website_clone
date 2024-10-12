import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PageLoader = ({ onComplete }) => {

    useEffect(() => {
       
        gsap.to('.bar', {
            height: 0,
            delay: 0.5,
            duration: 1.5,
            stagger: { amount: 0.5 },
            ease: 'power4.inOut',
        });

       
        const timeout = setTimeout(() => {
            if (onComplete) onComplete(); 
        }, 4000); 

        
        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <div className="overlay">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
};

export default PageLoader;
