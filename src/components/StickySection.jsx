import React, { useEffect, useState } from 'react';


const StickyComponent = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPosition = 200; 
      const scrollY = window.scrollY;

      if (scrollY > stickyPosition) {
        setIsSticky(true);
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-container ${isSticky ? 'sticky' : ''}`}>
      <form className="order-form">
        <label htmlFor="city">Your City:</label>
        <select id="city" className="city-dropdown">
          <option value="Odesa">Odesa</option>
          <option value="Kyiv">Kyiv</option>
        </select>
        <div className="quantity-section">
          <button className="minus-btn">-</button>
          <input type="text" value="01" className="quantity-input" readOnly />
          <button className="plus-btn">+</button>
        </div>
        <button className="add-to-cart-btn">Add to cart</button>
        <div className="price-section">
          <span className="price">110</span>
          <span className="currency">UAH</span>
        </div>
      </form>
    </div>
  );
};

export default StickyComponent;
