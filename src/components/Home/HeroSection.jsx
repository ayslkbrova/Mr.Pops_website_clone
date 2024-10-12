import React from 'react'
import Arrow from '../Icons/Arrow'
import CircleComponent from '../buttons/CircleComponent'
import item1 from "../../assets/icons/item1.svg";
import item2 from "../../assets/icons/item2.svg";
import item3 from "../../assets/icons/item3.svg";
import backgroundImage from "../../assets/img/download.webp";

const HeroSection = () => {
    const scrollToImage = () => {
        const imageContainer = document.querySelector('.resizable-image');
        if (imageContainer) {
            imageContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="home-section">
                <div className="content">
                    <div className="home_section_content">
                        <div className="images-container">
                            <img src={item1} alt="Image 1" className="images" />
                            <img src={item2} alt="Image 2" />
                            <img src={item3} alt="" />
                        </div>
                        <p className="description">
                            No, girl, I don't like all these ice creams and frozen juices... When I was a kid I liked it, of course, but I don't know what else I liked... let's have the usual, white chocolate-covered... And what's that lilac soap you have? mr.pops? I'll take the bright yellow one, what's that? Mango-maracuya? Oh, it's cold! And what's that crunching on your teeth? Bones... cool! And can I bring this pink one, too!
                            <div className="circle_button">
                                <CircleComponent />
                                <span>Flavours</span>
                            </div>
                        </p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div onClick={scrollToImage} className="arrow_icon">
                            <Arrow />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-image">
                <img src={backgroundImage} alt="Background Image" className="resizable-image" />
            </div>
        </>
    )
}

export default HeroSection