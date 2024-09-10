// import React, {createContext, useState} from 'react'
// import DataCards from '../Datafile/Datafile';

// export const ShopContext =  createContext(null);
// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 1; i < DataCards.length + 1; i++ ) {
//         cart[i] =0
//     }
//     return cart;
// }
// const Shopcontextprovider = (props) => {
//     const [cartItems , setCartItems] =useState(getDefaultCart);


//     // adding items to cart by id for example
// const addToCart = (itemId) => {
//     setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
// }

// const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
// }


// const contextValue = {cartItems, addToCart , removeFromCart}

// //  console.log(cartItems)
//   return(
//      <ShopContext.Provider value={contextValue} >
//     {props.children}
//     </ShopContext.Provider>)
  
// }

// export default Shopcontextprovider






import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    console.log('addToCart called with itemId:', itemId);
    setCartItems((prev) => {
      const newCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      console.log('Updated cartItems:', newCartItems);
      return newCartItems;
    });
  };

  const contextValue = { cartItems, addToCart };
  console.log('Current cartItems:', cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;