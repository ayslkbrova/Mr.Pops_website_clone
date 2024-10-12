import React from 'react'
import aboutImage2 from "../../assets/img/about2.webp";
import aboutImage3 from "../../assets/img/about3.webp";
const SvgPathSecond = () => {
    return (
        <>
            <div className="svg_container_2">
                <div className="content_item">
                    <div className="img_abou_content">
                        <div className="content">
                            <h1>How it began</h1>

                        </div>
                        <img id="img2" src={aboutImage2} alt="About" />
                    </div>
                    <div className="img_abou_content">
                        <div className="content">
                            <div className="content_text">
                                <p>To make everything true, we focused on craft production: we did everything ourselves. We invented the first recipes and immediately cooked: at home, in the kitchen. What we got, we tested on friends. All ingredients were selected and fresh from the market.</p>
                                <p>That's how the first hits appeared: Toffee and Strawberry with cream.</p>
                                <p>With them we went to run the embankment in Dnipro. More precisely, how to "run": every day we barely brought a cycle rickshaw with products to the location and stood there until the evening.</p>
                                <p>But by the end of the season, they began to participate in food festivals. Thus, we accumulated money for the first equipment, with which our production began. Now we are looking for and buying it all over the world. As well as ingredients.</p>
                                <p>We have the usual tastes. But there is also exotic. We tell the audience how to move from a simple taste to a strange one. If you are not afraid to try a familiar taste, then after this step, mutual trust begins. Now try the whole line - a point in your to-do list for the summer.</p>
                            </div>

                        </div>
                        <img id="img3" src={aboutImage3} alt="About" />
                    </div>
                </div>
                <svg viewBox="0 0 1380 1093" preserveAspectRatio="none" fill="none">
                    <path
                        id="path2"
                        fill="none"
                        stroke="#b00e2f"
                        strokeMiterlimit="10"
                        strokeDasharray="4 2"
                        d="M192.62,3c-26.7,29.6-54.26,64.5-74.62,108-38.29,81.89-62,231.7,3,308,13.47,15.81,38.76,37.86,40,72-2.3,82.89-68.36,92.56-93,15-19-66.77,48.63-166.72,93-161,69.46,8.95,132.69,283.35,36,476-30.11,60-35.5,109.5-81.5,111.5-24.16,1-69.54-26.67-62-124,9.12-117.61,48-117,60-120,26.27-6.57,147.5,135.73,114,251C209.92,1000,163.26,1007.72,141,1087c-.24.84-.53,1.88-.86,3.1"
                    />
                    <circle id="circle2" r="10" />
                </svg>
            </div>
        </>
    )
}

export default SvgPathSecond