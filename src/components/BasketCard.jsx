import React, { useContext } from 'react';
import { IceCream } from '../context/IcecreamContext';

const BasketCard = ({ isOpen, toggleCart }) => {
  const { basket, removeFromBasket, updateQuantity } = useContext(IceCream); 


  const calculateTotal = () => {
    return basket.reduce((total, item) => total + (parseFloat(item.cities[0].price) * item.quantity), 0);
  };

  return (
    <div className={`basket-card ${isOpen ? 'open-basket' : ''}`}>
      <div className="basket-overlay">
        <div className="basket-card-content">
          <div className="basket-card-header">
            <button className="basket-card-close-button" onClick={toggleCart}>✖</button>
          </div>

          {basket.length > 0 ? (
            <>
              {basket.map((item, index) => (
                <div className="basket-card-item" key={index}>
                  <img src={item.img} alt={item.name} className="basket-card-product-image" />
                  <div className="basket-card-item-details">
                    <p className="basket-card-product-name">{item.name}</p>
                    <p className="weight">Serving weight: 80gr</p>
                    <div className="basket-card-item-count">
                      <div className="modal-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} type="button" className="styles_button_stroke__eb5Qp styles_has_hover__Qf4F_"><span className="styles_button_stroke__container__YH_dE"><span className="styles_button_stroke__content__tzl67 none"><b>-</b></span></span></button>
                        <div className="styles_input__2_cWs"><input type="text" value={item.quantity.toString().padStart(2, '0')} readOnly /></div>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} type="button" className="styles_button_stroke__eb5Qp styles_has_hover__Qf4F_"><span className="styles_button_stroke__container__YH_dE"><span className="styles_button_stroke__content__tzl67 none"><b>+</b></span></span></button>
                        <span className="basket-card-product-price">{item.cities[0].price * item.quantity} UAH</span>
                      </div>
                    </div>
                  </div>
                  <div className="basket_remove">
                    <button className="basket-card-remove-item" onClick={() => removeFromBasket(item.id)}></button>
                  </div>
                </div>
              ))}

              <div className="basket-card-order-summary">
                <p>Total: <span className='highlight'>{calculateTotal()} UAH</span></p>
                <p className='order_text'>Minimum order for the city of <span className='highlight'>Dnipro</span> <span className="highlight">20 portions</span> You have <span className="highlight">{basket.reduce((total, item) => total + item.quantity, 0)} portions</span> left</p>
              </div>

              <div className="basket-card-footer">
                <button className="basket-card-place-order-button" disabled={calculateTotal() === 0}>Place an order</button>
                <button className="basket-card-continue-shopping-button" onClick={toggleCart}>Continue shopping</button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
