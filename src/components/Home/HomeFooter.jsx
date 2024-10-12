import React from 'react'
import TrailingBackground from '../../assets/img/trailing_1920x0_479.webp'
import Marque from "../../components/Marque";

const HomeFooter = () => {
    return (
        <>
            <div className='gap' ></div>

            <div className="image-wrapper">
                <img
                    src={TrailingBackground}
                    alt="Background Image"
                    className="scroll-image"
                />
            </div>
            <Marque />
            <div style={{ height: '250px' }}></div>

        </>
    )
}

export default HomeFooter