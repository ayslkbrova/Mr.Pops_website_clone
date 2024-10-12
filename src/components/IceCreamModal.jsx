import React, { useState, useEffect, useContext } from 'react';
import { IceCream } from '../context/IcecreamContext'; 

const IceCreamModal = ({ isOpen, onRequestClose, selectedIceCream }) => {
    const [quantity, setQuantity] = useState(1); 
    const { addToBasket } = useContext(IceCream); 
    const [selectedCountry, setSelectedCountry] = useState(selectedIceCream ? selectedIceCream.cities[0].country : '');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setQuantity(1);
            setPrice(selectedIceCream.cities[0].price);
       
        }
    }, [isOpen]);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleCountryChange = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        const selectedCity = selectedIceCream.cities.find(city => city.country === country);
        if (selectedCity) {
            setPrice(selectedCity.price);
        }
    };

  
    const handleAddToCart = () => {
       
        addToBasket(selectedIceCream, quantity);
        onRequestClose();
    };

    if (!isOpen || !selectedIceCream) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-image">
                        <img src={selectedIceCream.img} alt={selectedIceCream.name} />
                        <button onClick={onRequestClose} type="button" className="styles_button_stroke__eb5Qp styles_has_hover__Qf4F_">
                            <span className="styles_button_stroke__container__YH_dE">
                                <span className="styles_button_stroke__content__tzl67 none"><svg class="styles_button_close__ico__A5GuD" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 10.9594L0 21.2132L0.707107 21.9203L10.9609 11.6665L21.2148 21.9203L21.9219 21.2132L11.668 10.9594L21.9203 0.707107L21.2132 0L10.9609 10.2523L0.708672 0L0.00156516 0.707107L10.2538 10.9594Z"></path></svg></span>
                            </span>
                        </button>
                    </div>
                    <div className="modal-details">
                        <div className="details">
                            <p>{selectedIceCream.name}</p>
                            <p>{price} UAH</p>
                        </div>
                        <p className="weight">Serving weight: {selectedIceCream.weight}g</p>

                        <div className="select_country">
                            <label htmlFor="country">Your city:</label>
                            <div class="dropdown-container">
                                <select class="dropdown" value={selectedCountry} onChange={handleCountryChange}>
                                    {selectedIceCream.cities.map((city, index) => (
                                        <option key={index} value={city.country}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <div className="modal-quantity">
                            <button onClick={decrementQuantity} type="button" className="styles_button_stroke__eb5Qp styles_has_hover__Qf4F_">
                                <span className="styles_button_stroke__container__YH_dE">
                                    <span className="styles_button_stroke__content__tzl67 none"><b>-</b></span>
                                </span>
                            </button>
                            <div className="styles_input__2_cWs">
                                <input type="text" value={quantity.toString().padStart(2, '0')} readOnly />
                            </div>
                            <button onClick={incrementQuantity} type="button" className="styles_button_stroke__eb5Qp styles_has_hover__Qf4F_">
                                <span className="styles_button_stroke__container__YH_dE">
                                    <span className="styles_button_stroke__content__tzl67 none"><b>+</b></span>
                                </span>
                            </button>
                            <button onClick={handleAddToCart} type="button" className="styles_button_stroke__eb5Qp styles_has_hover__Qf4F_">
                                <span className="styles_button_stroke__container__YH_dE">
                                    <span className="styles_button_stroke__content__tzl67 none"><b>Add to Cart</b></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IceCreamModal;
