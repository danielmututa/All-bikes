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
//     const [cartItems , setCartItems] = useState(getDefaultCart());
  

  


//     const getTotalCartAmount = () => {
//       let totalAmount = 0;

//       for (const item in cartItems) {
//         if (cartItems[item] > 0) {
//           let itemInfo = DataCards.find((product) => product.id === String (item));
//           console.log(`Item ${item} info:`, itemInfo);
//       console.log(`Cart item quantity:`, cartItems[item]);
//           totalAmount += cartItems[item] * itemInfo?.price

          
//         }
//       }
// return totalAmount

//     }


// // deleteitem///////////////////////
// const deleteFromCart = (itemId) => {
//   setCartItems((prev) => { 
//     const updatedCart = { ...prev }; delete updatedCart[itemId];
//     return updatedCart;
//   });
// };
// // END delete enditem//////


//     // adding items to cart by id for example
// const addToCart = (itemId) => {
//     setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
// }

// const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({...prev, [itemId] : prev[itemId] -1}))
// }

// const updatedCartItemCount = (newAmount, itemId) => {
//   setCartItems((prev) => ({...prev, [itemId]: newAmount}));
// };

// const contextValue = {
//   cartItems, 
//   addToCart ,
//    removeFromCart,
//    updatedCartItemCount,
//    getTotalCartAmount,
//    deleteFromCart
//   }

// //  console.log(cartItems)
//   return(
//      <ShopContext.Provider value={contextValue} >
//     {props.children}
//     </ShopContext.Provider>)
  
// }



// export default Shopcontextprovider







import React, { createContext, useState, useEffect, useCallback } from 'react';
import DataCards from '../Datafile/Datafile';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        return JSON.parse(savedCart);
    }
    let cart = {};
    for (let i = 1; i < DataCards.length + 1; i++ ) {
        cart[i] = 0;
    }
    return cart;
};

const Shopcontextprovider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const getTotalCartAmount = useCallback(() => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = DataCards.find((product) => product.id === String(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    }, [cartItems]);

    const addToCart = useCallback((itemId) => {
        setCartItems((prev) => {
            const newCart = {...prev, [itemId]: (prev[itemId] || 0) + 1};
            return newCart;
        });
    }, []);

    const removeFromCart = useCallback((itemId) => {
        setCartItems((prev) => {
            const newCart = {...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0)};
            return newCart;
        });
    }, []);

    const deleteFromCart = useCallback((itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    }, []);

    const updatedCartItemCount = useCallback((newAmount, itemId) => {
        setCartItems((prev) => {
            const newCart = {...prev, [itemId]: newAmount};
            return newCart;
        });
    }, []);

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updatedCartItemCount,
        getTotalCartAmount,
        deleteFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default Shopcontextprovider;


