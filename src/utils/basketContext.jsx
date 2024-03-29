import { nanoid } from 'nanoid';
import { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basketItem, setBasketItem] = useState([]);

  const addItem = ( img, img2x, title, price, quantity, totalPrice ) => {
    const newItem = {
      id: nanoid(),
      img,
      img2x,
      title,
      price,
      quantity,
      totalPrice
    };
    setBasketItem([newItem, ...basketItem]);
    
  };

  return (
    <BasketContext.Provider value={{ basketItem, addItem }}>
      {children}
    </BasketContext.Provider>
  );
};
