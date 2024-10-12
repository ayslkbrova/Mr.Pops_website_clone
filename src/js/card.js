import React, { useEffect, useRef } from 'react';

const Card = () => {
  // Kartlar için referans oluşturuyoruz
  const cardRefs = useRef([]);

  useEffect(() => {
    // Her bir kartı referans alıyoruz ve hover animasyonlarını ekliyoruz
    cardRefs.current.forEach((card) => {
      const hoverBg = card.querySelector('.product-hover-bg');

      function getDirection(event, element) {
        const { top, right, bottom, left, width, height } = element.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;

        const fromTop = Math.abs(y);
        const fromBottom = Math.abs(height - y);
        const fromLeft = Math.abs(x);
        const fromRight = Math.abs(width - x);

        const min = Math.min(fromTop, fromBottom, fromLeft, fromRight);

        if (min === fromTop) return 'top';
        if (min === fromBottom) return 'bottom';
        if (min === fromLeft) return 'left';
        return 'right';
      }

      function handleMouseEnter(event) {
        const direction = getDirection(event, card);
        hoverBg.style.transition = 'none';

        switch (direction) {
          case 'top':
            hoverBg.style.transform = 'translateY(-100%)';
            break;
          case 'bottom':
            hoverBg.style.transform = 'translateY(100%)';
            break;
          case 'left':
            hoverBg.style.transform = 'translateX(-100%)';
            break;
          case 'right':
            hoverBg.style.transform = 'translateX(100%)';
            break;
          default:
            break;
        }

        setTimeout(() => {
          hoverBg.style.transition = 'transform 0.4s ease';
          hoverBg.style.transform = 'translate(0, 0)';
        }, 10);
      }

      function handleMouseLeave(event) {
        const direction = getDirection(event, card);
        hoverBg.style.transition = 'transform 0.4s ease';

        switch (direction) {
          case 'top':
            hoverBg.style.transform = 'translateY(-100%)';
            break;
          case 'bottom':
            hoverBg.style.transform = 'translateY(100%)';
            break;
          case 'left':
            hoverBg.style.transform = 'translateX(-100%)';
            break;
          case 'right':
            hoverBg.style.transform = 'translateX(100%)';
            break;
          default:
            break;
        }
      }

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

    
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="card_section">
      <div className="card-container">
      
        {[...Array(3)].map((_, index) => (
          <div
            className="card"
            key={index}
            ref={(el) => (cardRefs.current[index] = el)} // Kartları referans alıyoruz
          >
            <a className="product-card" href="/en/catalog/lemon-cheesecake/">
              <div className="product-hover-bg"></div>
              <div className="product-image">
                <img
                  src="https://data.mrpops.ua/assets/cache_image/media/product-preview/vanil-brauni_600x0_09a.png"
                  alt="Lemon Cheesecake"
                />
              </div>
              <div className="hover-emoji">
                <div className="emoji-container">
                  <div className="static-emoji"></div>
                  <div className="active-emoji"></div>
                </div>
              </div>
              <div className="product-content">
                <div className="product-info">
                  <div className="product-name">Lemon Cheesecake</div>
                  <div className="product-weight">Serving weight: 80g</div>
                  <div className="product-price">
                    110 <span>UAH</span>
                  </div>
                </div>
                <div className="button-wrapper">
                  <div className="button-container">
                    <div className="border-container">
                      <div className="circular-button">
                        <img src="download.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
