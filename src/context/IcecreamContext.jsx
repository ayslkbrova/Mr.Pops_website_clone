import React, { createContext, useState, useEffect } from 'react';
import iceCreamData from '../data/IceCream.json';

export const IceCream = createContext();

const IcecreamProvider = ({ children }) => {

  const [data] = useState(iceCreamData);

  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem('basket');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  
  const addToBasket = (item, amount = 1) => {
    setBasket((prevBasket) => {
    
      const existingItem = prevBasket.find((i) => i.id === item.id);
      
      if (existingItem) {
       
        return prevBasket.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + amount } : i
        );
      } else {
    
        return [...prevBasket, { ...item, quantity: amount }];
      }
    });
  };

  const removeFromBasket = (itemId) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.id !== itemId)
    );
  };

  // Sepetteki ürün miktarını güncelleme fonksiyonu
  const updateQuantity = (itemId, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <IceCream.Provider
      value={{
        data, 
        basket, 
        addToBasket, 
        removeFromBasket, 
        updateQuantity, 
      }}
    >
      {children}
    </IceCream.Provider>
  );
};

export default IcecreamProvider;
