import React from 'react'
import aboutImage1 from "../../assets/img/about1.jpg";
const SvgPathFirst = () => {
  return (
  <>
        {/* SVG 1 */}
        <div className="svg_container_1">
          <div className="img_abou_content">
            <img src={aboutImage1} alt="About" />
            <div className="content">
              <h1>How originated idea</h1>
              <p>
                In America, there is such a product - popsicle. It is something
                like our popsicle on a stick, but on a fruit basis. At the time
                of creation, in 2015, it was exotic for Ukraine. But we took a
                risk and did it.
              </p>
            </div>
          </div>
          <svg viewBox="0 0 1380 742" preserveAspectRatio="none" fill="none">
            <path fill="none" stroke="#b00e2f" stroke-miterlimit="10" class="cls-1" d="M1014,110.64l1.94-.47"></path>
            <path
              id="path1"
              fill="none"
              stroke="#b00e2f"
              strokeMiterlimit="10"
              strokeDasharray="4 2"
              d="M1017.86,109.71c248.91-57.61,221,237.25,26.65,296.8C997.9,417.07,922.5,419.5,918,380c-7.13-62.54,101.9-82.87,173-49,73.14,34.84,96.87,162.61,53.5,230.5-47.23,74-112.68,96-410,48-124-20-245-71-417-11C262,617.87,146,706.87,125.5,659.5c-13-30,10.63-64.47,51-76,41.41-11.82,96.5-6.17,104,30,8,38.52-35.41,74.15-83.18,126.29"
            />

            <circle id="circle1" r="10" cx="1017.86" cy="109.71" />
          </svg>
        </div>
  </>
  )
}

export default SvgPathFirst