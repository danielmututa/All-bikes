import React, {createContext, useState} from 'react'
import DataCards from '../Datafile/Datafile';

export const ShopContext =  createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < DataCards.length + 1; i++ ) {
        cart[i] =0
    }
    return cart;
}
const Shopcontextprovider = (props) => {
    const [cartItems , setCartItems] =useState(getDefaultCart);


    const getTotalCartAmount = () => {
      let totalAmount = 0;

      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = DataCards.find((product) => product.id === String (item));
          console.log(`Item ${item} info:`, itemInfo);
      console.log(`Cart item quantity:`, cartItems[item]);
          totalAmount += cartItems[item] * itemInfo?.price

          
        }
      }
return totalAmount

    }








    // adding items to cart by id for example
const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
}

const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] -1}))
}

const updatedCartItemCount = (newAmount, itemId) => {
  setCartItems((prev) => ({...prev, [itemId]: newAmount}));
};

const contextValue = {
  cartItems, 
  addToCart ,
   removeFromCart,
   updatedCartItemCount,
   getTotalCartAmount
  }

//  console.log(cartItems)
  return(
     <ShopContext.Provider value={contextValue} >
    {props.children}
    </ShopContext.Provider>)
  
}



export default Shopcontextprovider






