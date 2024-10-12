import React from 'react'
import homeAboutback from '../../assets/img/homeabout.webp'
import about1 from '../../assets/img/about_1.jpg'
import about2 from '../../assets/img/about_2.jpg'
import CircleComponent from '../buttons/CircleComponent'
const AboutSection = () => {
    return (
        <>
            <section id="home_about">
                <div className="about_content">
                    <span>

                        <h2>
                            THIS IS MR. POPS.<br />
                            HE'LL COME IN EVEN TO THOSE <br />
                            WHO ARE COMPLETELY INDIFFERENT<br />
                            TO ICE CREAM.
                        </h2>


                    </span>
                    <div className="image-container">
                        <img src={homeAboutback} alt="Zoomable Image" />
                    </div>
                </div>

                <div className="about_description parallax-section">
                    <div className="desc_image left-image parallax-image">
                        <img src={about1} alt="" />
                    </div>
                    <div className="description">
                        <h2>Who has tried it, knows everything. Those who haven't - get ready for the dopamine thirst of "that very taste"</h2>
                        <p>Our goal is not ice cream. It would be quite simple. We need to make you "touched" when you, for example, bite into an Eskimo. It is difficult to do, but we do it.</p>
                        <p>How? We do not tolerate simplifications: neither in tastes, nor in ingredients, nor in production. Pistachio, for example, we buy on a farm in the Bronte region, Sicily. We order Alfonso mango from India, and chocolate is brought to us directly from Belgium. Our Japanese matcha tea is exclusively of the Sagano variety.</p>
                        <div className="circle_button">
                            <CircleComponent />
                            <span>About Us</span>
                        </div>
                    </div>
                    <div className="desc_image right-image parallax-image">
                        <img src={about2} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection