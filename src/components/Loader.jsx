import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let currentValue = 0;

        const updateCounter = () => {
            if (currentValue === 100) {
                return;
            }

            currentValue += Math.floor(Math.random() * 10) + 1;
            if (currentValue > 100) currentValue = 100;

            setCounter(currentValue);

            let delay = Math.floor(Math.random() * 200) + 50;
            setTimeout(updateCounter, delay);
        };

        updateCounter();

        gsap.to('.counter', { opacity: 0, delay: 3.5, duration: 0.25 });
        gsap.to('.bar', {
            height: 0,
            delay: 3.5,
            duration: 1.5,
            stagger: { amount: 0.5 },
            ease: 'power4.inOut',
        });

        setTimeout(() => {
            if (onComplete) onComplete(); 
        }, 4000);
    }, [onComplete]);

    return (
        <>
            <h1 className="counter">{counter}</h1>

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
        </>
    );
};

export default Loader;
