import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IceCream } from '../context/IcecreamContext';
import basketIcon from '../assets/icons/download.svg';
import IceCreamModal from './IceCreamModal';
import { addCardAnimations } from '../js/animation';

const Card = ({ limit }) => {
  const cardRefs = useRef([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedIceCream, setSelectedIceCream] = useState(null);
  const { data: iceCreams, addToBasket } = useContext(IceCream);

  const limitedIceCreams = iceCreams.slice(0, limit);



  const openModal = (iceCream) => {
    setSelectedIceCream(iceCream);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIceCream(null);
  };

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      addCardAnimations(cardRefs);
    }
  }, [cardRefs]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedIceCreams = chunkArray(limitedIceCreams, 4);

  return (
    <section id="card_section">
      <div className="card-container">
        {groupedIceCreams.map((group, groupIndex) => (
          <div className="card" key={groupIndex}>
            {group.map((iceCream, index) => (
              <div key={`${iceCream.name}-${index}`} ref={addToRefs}>
                <div className="product-card">
                  <Link to={`/product/${iceCream.id}`} className="product-link">
                    <div className="product-hover-bg"></div>
                    <div className="product-image">
                      <img src={iceCream.img} alt={iceCream.name} />
                    </div>
                    <div className="hover-emoji">
                      <div className="emoji-container">
                        <div className="static-emoji"></div>
                        <div className="active-emoji"></div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-info">
                        <div className="product-name">{iceCream.name}</div>
                        <div className="product-weight">Serving weight: {iceCream.weight}</div>
                        <div className="product-price">
                          {iceCream.cities[0].price} <span>UAH</span>
                        </div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-container">
                          <div className="border-container">
                            <div
                              className="circular-button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                openModal(iceCream);
                              }}
                            >
                              <img src={basketIcon} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <IceCreamModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedIceCream={selectedIceCream}
      />
    </section>
  );
};

export default Card;
