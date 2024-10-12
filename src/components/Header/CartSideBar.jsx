import React, { useState,useContext } from 'react'
import BasketCard from '../BasketCard';
import Basket from '../Icons/Basket';
import { IceCream } from '../../context/IcecreamContext';

const CartSideBar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    const { basket } = useContext(IceCream);
    const totalItems = basket.length > 0 ? basket.reduce((total, item) => total + item.quantity, 0) : 0;
    return (
        <>
            <button onClick={toggleCart} type="button"
                className="styles_button_stroke__eb5Qp   styles_has_hover__Qf4F_"><span
                    className="styles_button_stroke__container__YH_dE"><span
                        className="styles_button_stroke__content__tzl67 none"><span
                            className="styles_shop_cart_button__vKz3T"><span>
                                <Basket />
                            </span>
                            <span className="basket-count">{totalItems}</span>
                        </span></span></span>
            </button>
            <BasketCard isOpen={isCartOpen} toggleCart={toggleCart} />
        </>
    )
}

export default CartSideBar