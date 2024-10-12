import React, { useEffect } from 'react';
import MapImage from '../../assets/img/map.92c118df.svg'
import MapIcon from '../../assets/icons/mapIcon.svg'
import CircleComponent from '../buttons/CircleComponent';

const MapWithText = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.view').classList.add('viewed');
    }, 2000);
  }, []);

  return (
    <div className="main-layout">
      {/* Mətn bölməsi */}
      <div className="text-section">
        <h1>You need to trust your
          own experience. Visit
          one of our points of
          sale.</h1>

        <div className="circle_button">
          <CircleComponent />
          <span>Where to buy</span>
        </div>
      </div>

      {/* Xəritə bölməsi */}
      <div className="map-container">
        <img src={MapImage} alt="Ukrayna Xəritəsi" className="map" />
        <div className="view">
          <div className="zhytomyr">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="kiev">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="kiev-city">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="kharkiv">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="zaporizhzhia">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="mykolaiv">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="odessa">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="vinnytsia">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="chernivtsi">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="lviv">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="cherkasy">
            <img src={MapIcon} alt="marker" />
          </div>
          <div className="dnepr">
            <img src={MapIcon} alt="marker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapWithText;
