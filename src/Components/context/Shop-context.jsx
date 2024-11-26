import React, { createContext, useState, useEffect, useCallback } from 'react';


export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//         return JSON.parse(savedCart);
//     }
   
//     return {};
// };


const getDefaultCart = (availableBikes) => {
    const defaultCart = {};
    if (Array.isArray(availableBikes)) {
        availableBikes.forEach((bike) => {
            defaultCart[bike._id] = 0;
        });
    }
    return defaultCart;
};




const Shopcontextprovider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [availableBikes, setAvailableBikes] = useState([]);
   
   

     useEffect(() => {
        const fetchBikes = async () => {
            try {
                const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/bikes/available');
                const data = await response.json();
                console.log('API Response:', data); // Debug log
                // Verify the data structure
                if (Array.isArray(data)) {
                    setAvailableBikes(data);
                } else {
                    console.error('API response is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching bikes:', error);
            }
        };
        fetchBikes();
    }, []);



   
     

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    //   // Add this debug log
    //   useEffect(() => {
    //     console.log('Cart Items Updated:', cartItems);
    // }, [cartItems]);

    useEffect(() => {
        console.log('Updated cartItems state:', cartItems);
    }, [cartItems]);
    


    const getTotalCartAmount = useCallback(() => {
        console.log('Calculating total amount...');
        console.log('Current cartItems:', cartItems);
        console.log('Available bikes:', availableBikes);
        
        let totalAmount = 0;
        for (const itemId in cartItems) {
            console.log('Checking item:', itemId, 'Amount:', cartItems[itemId]);
            if (cartItems[itemId] > 0) {
                const itemInfo = availableBikes.find((product) => {
                    console.log('Comparing:', product._id, 'with', itemId);
                    return product._id === itemId;
                });
                console.log('Found item info:', itemInfo);
                if (itemInfo) {
                    totalAmount += cartItems[itemId] * itemInfo.price;
                    console.log('Running total:', totalAmount);
                }
            }
        }
        return totalAmount;
    }, [cartItems, availableBikes]);

    const addToCart = useCallback((itemId) => {
        console.log('Adding to cart, received itemId:', itemId);
        setCartItems((prev) => {
            const newCart = {
                ...prev,
                [itemId]: (prev[itemId] || 0) + 1
            };        
            console.log('New cart state:', newCart);
            return newCart;
        });
    }, []);
    

    const removeFromCart = useCallback((itemId) => {
        setCartItems((prev) => ({
            ...prev, 
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
      
        }));
    }, []);

    const deleteFromCart = useCallback((itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    }, []);

    const updatedCartItemCount = useCallback((newAmount, itemId) => {
        setCartItems((prev) => ({
        ...prev,
         [itemId]: newAmount
    
        }));
    }, []);

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updatedCartItemCount,
        getTotalCartAmount,
        deleteFromCart,
        availableBikes
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default Shopcontextprovider;


