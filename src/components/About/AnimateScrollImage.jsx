import React from 'react'
import sifirImage from "../../assets/icons/sifir.svg";
const AnimateScrollImage = () => {
    return (

        <img
            id="animatedImage"
            src={sifirImage}
            alt="Animated Image"
            style={{ position: "absolute", width: "80px", height: "80px" }}
        />
    )
}

export default AnimateScrollImage