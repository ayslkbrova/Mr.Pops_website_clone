import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (iceCream, quantity, price) => {
        const existingIceCreamIndex = cartItems.findIndex(item => item.id === iceCream.id);

        if (existingIceCreamIndex > -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingIceCreamIndex].quantity += quantity;
            setCartItems(updatedCart);
        } else {
            const newItem = {
                id: iceCream.id,
                name: iceCream.name,
                price: price,
                img: iceCream.img,
                quantity: quantity,
            };
            setCartItems(prevCart => [...prevCart, newItem]);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
