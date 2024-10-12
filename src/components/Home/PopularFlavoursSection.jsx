import React from 'react'
import SvgPathTextVideo from './SvgPathTextVideo'
import CircleComponentRed from '../buttons/CircleComponentRed'
import Card from '../Card'
import Carousel from './Carousel'

const PopularFlavoursSection = () => {
    return (
        <section id="popular_flovors">
            <h1>Popular flavors</h1>
            <div className="popular_flavors_cards">

                <Card limit={8} />
            </div>
            <div className="red_circle">
                <CircleComponentRed />
            </div>
            <Carousel />

            <div id="about_video">

                <SvgPathTextVideo />

                <div className="text-container">
                    <p className="styled-text">
                        If you do not want to leave your office or apartment, collect a pack of the desired flavors.
                    </p>
                    <p className="styled-text">
                        WE WILL DELIVER IT TO YOU: WE CAN IN A BRANDED PACKAGE, OR IN A GIFT BOX.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default PopularFlavoursSection