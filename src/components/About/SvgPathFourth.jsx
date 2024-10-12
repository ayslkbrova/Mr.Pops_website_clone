import React from 'react'
import aboutImage5 from "../../assets/img/about5.webp";
import CircleComponent from '../buttons/CircleComponent';
const SvgPathFourth = () => {
    return (
        <>
            {/* SVG 4 */}
            <div className="svg_container_4">
                <div className="img_abou_content">

                    <div className="content">
                        <h1>What
                            will be
                            next</h1>
                        <p>
                            And then the war came to our country. It destroyed all achievements and zeroed all plans.
                            Despite this, the guys and girls in the production work to ensure that our partners who have the opportunity to work in such a difficult time have our ice cream in the assortment. We continue to look for new partners who are suitable for us.
                            To understand whether we are on the way - just try it.

                            .
                        </p>
                        <CircleComponent />

                    </div>
                    <img src={aboutImage5} alt="About" />
                </div>
                <svg viewBox="0 0 1380 995" preserveAspectRatio="none" fill="none">
                    <path
                        id="path4"
                        fill="none"
                        stroke="#b00e2f"
                        strokeMiterlimit="10"
                        strokeDasharray="4 2"
                        d="M1144.72,3.6C1137,20.22,1139,23.48,1128,34,1066.18,93.23,941.34,8.27,810.5,44.5c-93.07,25.77-64,97-137,95-45-1.23-99-47-88.5-84.5,11.3-40.37,266.68-2,267,25,.23,19.41-130.38,43-247,43-109.95,0-116.23-21.06-209-19-170.9,3.79-267.08,77.75-287,48-13.47-20.12,16.48-74.89,62-94,41.27-17.33,95.08-5.23,116,26,47.8,73.19-110.86,254.4-154,245C85.43,321,55.46,210.2,80,192c47.44-26.95,202,126.52,138,219-41.31,41.56-150.12-23.1-164,0-15.69,26.12,134.21,90.83,139,199,2.56,57.85-16.18,57.88-98.5,190.5-18,29,20,60,15,114-6.61,71.42,30.25,75.92,245.94,75.51"
                    />
                    <path fill="#b00e2f" d="M358,990a7.33,7.33,0,0,1-1.58-4.55A13.67,13.67,0,0,0,362,990a14.45,14.45,0,0,0-5.56,4.53A7.68,7.68,0,0,1,358,990Z"></path>
                    <circle id="circle4" r="10" />
                </svg>
            </div>
        </>
    )
}

export default SvgPathFourth