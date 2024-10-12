import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marque from "../components/Marque";
import MapWithText from "../components/Home/MapWithText";
import ThreeDScrollAnimation from "../components/ThreeDScrollAnimation";
import AboutSection from "../components/Home/AboutSection";
import PopularFlavoursSection from "../components/Home/PopularFlavoursSection";
import PartnershipSection from "../components/Home/PartnershipSection";
import HomeFooter from "../components/Home/HomeFooter";
import HeroSection from "../components/Home/HeroSection";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useEffect(() => {
        // İlk resim için animasyon
        const image = document.querySelector(".resizable-image");
        const secondimage = document.querySelector(".scroll-image");
        const img = document.querySelector('.image-container img');

    
        const imageAnimation = gsap.to(image, {
            scrollTrigger: {
                trigger: ".container-image",
                start: "top top",
                end: "+=580",
                scrub: 1,
                pin: true,
                pinSpacing: false,
                onLeave: () => {
                    gsap.set(image, { clearProps: "position" });
                }
            },
            padding: '20px',
            width: '1050px',
            scaleX: 0.5,
            scaleY: 0.5,
            ease: "none",
            zIndex: '1'
        });

        const secondImageAnimation = gsap.to(secondimage, {
            scrollTrigger: {
                trigger: ".image-wrapper",
                start: "top 40%",
                end: "+=380",
                scrub: 1,
                pin: true,
                pinSpacing: false,
                onLeave: () => {
                    gsap.set(secondimage, { clearProps: "position" });
                }
            },
            paddingTop: '20px',
            width: '1150px',
            scaleX: 0.5,
            scaleY: 0.5,
            ease: "none",
        });

        const imgAnimation = gsap.to(img, {
            scale: 3,
            ease: "none",
            duration: 2,
            scrollTrigger: {
                trigger: img,
                start: "top 50%",
                end: "bottom+=5000 top",
                scrub: true
            }
        });

        const parallaxAnimation = gsap.to(".parallax-image", {
            yPercent: -20,
            ease: "none",
            duration: 2,
            scrollTrigger: {
                trigger: ".parallax-section",
                scrub: 1.5
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.killTweensOf([image, secondimage, img]); 
        };

    }, []);

    return (
        <div id="Home">
            <Helmet>
                <title>Main</title>
            </Helmet>
            <HeroSection />
            <Marque />
            <AboutSection />
            <PopularFlavoursSection />
            <PartnershipSection />
            {/* <ThreeDScrollAnimation /> */}
            <MapWithText />
            <HomeFooter />
        </div>
    );
}

export default Home;
