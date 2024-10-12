import React, { useEffect, useState } from 'react';

const SvgPathTextVideo = () => {
    const [offset, setOffset] = useState(45);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [textLength, setTextLength] = useState(1000); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setTextLength(700);
                setOffset(35); 
                setIsMobile(true); 
            } if (window.innerWidth <= 468){
                setTextLength(500);
                setOffset(40); 
                setIsMobile(true); 

            }
                else {
                setTextLength(1000);
                setOffset(35); 
                setIsMobile(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) { 
            const handleScroll = () => {
                const currentScrollPos = window.scrollY;

                if (currentScrollPos > prevScrollPos) {
                    setOffset((prev) => Math.max(0, prev - 0.08));
                } else {
                    setOffset((prev) => Math.min(100, prev + 0.08));
                }

                setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [prevScrollPos, isMobile]);

    return (
        <div className="svg-video-container">
            <div className="svg-video-content">
                <svg
                    className="svg-text"
                    aria-hidden="true"
                    width="750"
                    height="1040"
                    viewBox="0 0 800 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="giftobox-curve"
                        d="M1 1000V311C1 100 200 1 400 1C600 1 799 100 799 311V1000"
                        stroke="none"
                        strokeWidth="2"
                    ></path>

                    <text className='rotated-text'>
                        <textPath
                            id="text-path"
                            href="#giftobox-curve"
                            textLength={textLength}
                            startOffset={`${offset}%`}
                        >
                            AND WE ARE LAZY-FRIENDLY
                        </textPath>
                    </text>
                </svg>

                <div className="image-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        src="https://data.mrpops.ua/media/giftbox.mp4"
                        className="curved-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <div className="button-wrapper">
                        <div className="button-container">
                            <div className="border-container">
                                <div className="circular-button">
                                    <span>BUY A BOX</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SvgPathTextVideo;
