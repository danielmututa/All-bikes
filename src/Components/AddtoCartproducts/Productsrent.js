// import React, { useContext } from 'react';
// import { ShopContext } from '../context/Shop-context';
// // import {useCart} from 'react-use-cart'
// const Productsrent = (props) => {

// //  const {addItem} = useCart();

// const {addToCart ,cartItems } = useContext(ShopContext)

// const cartItemAmount = cartItems[props.id] 
//   return (
    

//     <div className="Card--container">
//     <img src={ require('../images/' + props.image)} alt="" />

//  <div className="text">
//     <p className="type">{props.type}</p>
//     <p>{props.price}</p>

//     <div className="add--details">
//       <button className=' b-details-add'> {props.details} </button>
//       <button  className='b-details-add' onClick={() =>   addToCart(props.id)}>{props.add} {cartItemAmount > 0 && <>`(${cartItemAmount})` </>}</button>
//       {/* <button onClick={() => addItem(props.item)} className='b-details-add'>{props.add}</button> */}
//     </div>
//  </div>


   
// </div>


    
//   )
// }

// export default Productsrent




import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop-context';

const Productsrent = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  console.log('Productsrent rendered with props:', props);
  console.log('Current cartItems in Productsrent:', cartItems);

  const cartItemAmount = cartItems[props.id] || 0;

  const handleAddToCart = () => {
    console.log('Add to cart button clicked for id:', props.id);
    addToCart(props.id);
  };

  return (
    <div className="Card--container">
      <img src={require('../images/' + props.image)} alt="" />
      <div className="text">
        <p className="type">{props.type}</p>
        <p>{props.price}</p>
        <div className="add--details">
          <button className='b-details-add'>{props.details}</button>
          <button className='b-details-add' onClick={handleAddToCart}>
            {props.add} {cartItemAmount > 0 && `(${cartItemAmount})`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productsrent;