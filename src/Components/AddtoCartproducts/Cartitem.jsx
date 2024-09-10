// import React from 'react'

// export const Cartitem = (props) => {
//     const {id, price, image, type } = props.data
//   return (
  
//   <div className='cartItem'>
//    <img src={image} />

//    <div className="description">
//     <p>
//         {" "}
//         <b> {type}</b>
//     </p>
//    <p>${price}</p>
//    </div>

//     </div>)
  
// }


import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop-context';

export const Cartitem = (props) => {
  const { id, price, image, type } = props.data;
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='cartItem'>
      <img src={require('../images/' + image)} alt={type} />
      <div className="description">
        <p><b>{type}</b></p>
        <p>${price}</p>
        <p>Quantity: {cartItems[id]}</p>
      </div>
    </div>
  );
}
