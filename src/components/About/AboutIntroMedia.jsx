import React, { useState, useRef } from "react";
import aboutVideo from '../../assets/img/aboutVideo.jpg';
import '../../index.css';
import CircleVideoComponent from "../Buttons/CircleVideoComponent";
import Close from "../Icons/Close";

const AboutIntroMedia = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoRef = useRef(null);

    const showVideo = () => {
        setIsVideoOpen(true);
        setTimeout(() => {  
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 100); 
        document.body.classList.add('modal-open');
    };

    const closeVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setIsVideoOpen(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <div>
            <div className="media-section">
                <div className="media-wrapper">
                    <div className="lazy-image">
                        <img alt="About us" src={aboutVideo} className="image-loaded" />
                    </div>

                    {/* SVG Text */}
                    <svg className="text-svg" viewBox="0 0 790 1000" xmlns="http://www.w3.org/2000/svg">
                        <path id="full-circle" fill="none" stroke="none" strokeWidth="4"
                     d="M 395,500 m -370,0 a 370,480 0 1,1 740,0 a 370,480 0 1,1 -740,0" />
                        <text fill="white" fontSize="24" fontFamily="Arial">
                            <textPath href="#full-circle" startOffset="0%">
                             
                                
                                
                                TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM •
                                TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM •
                                TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM •
                                TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM • TRU ICE CREAM •
                            </textPath>
                        </text>
                    </svg>

                    {/* Play Button */}
                    <div className="button-container" onClick={showVideo}>
                        <div className="play-button-container">
                           <CircleVideoComponent/>
                        </div>
                    </div>
                </div>
            </div>

      
            {isVideoOpen && (
                <div className="video-container">
                    <video ref={videoRef} controls>
                        <source src="https://data.mrpops.ua/media/about/video_optimized.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="close-button" onClick={closeVideo}><Close/></button>
                </div>
            )}
        </div>
    );
};

export default AboutIntroMedia;
