import React, { useContext } from 'react'
import { ShopContext } from '../context/Shop-context'
import { Cartitem } from './Cartitem'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Carttab = () => {
 const {cartItems ,  getTotalCartAmount,  availableBikes} = useContext(ShopContext);
 const totalAmount =  getTotalCartAmount();
 const navigate = useNavigate();

// Add these console logs for debugging
console.log('CartItems:', cartItems);
console.log('Available Bikes:', availableBikes);
console.log('Total Amount:', totalAmount);


  return (
    <div className='cart'>

      <div className='cart--header'>
        <h3>Your Cart Items</h3>
      </div>
      <div className="cart--flex">

      
      {/* <div>
        <h1>Your Cart Items</h1>
      </div>  */}

      <div className='cartItems'>
        {availableBikes.map((product)=> {
              console.log('Product ID:', product._id, 'Cart Amount:', cartItems[product._id]);
          if(cartItems[product._id] && cartItems[product._id]  > 0) {
            return <Cartitem key={product._id} data = {product} />
          }
          return null
        })}

      </div>
      </div>
      {totalAmount > 0 ? 
      <div className="checkout--container">
        <div className="background--color">       
    <div className="checkout">

    <span className='top-line'></span>
      <p className='totalamount'>Subtotal: <span className='color--btn'> £{totalAmount}</span></p>
      <div className="checkout--button">
      <button onClick={() => navigate('/Rentabike')}>Continue <FontAwesomeIcon icon={faShoppingCart}/></button>
      <button onClick={() => navigate('/payments')}>Purchase</button>
      </div>
      </div> 
      </div>
      </div>   
    : (
      <div className="cartisempty--container">
<div className="cart-coverempty">

       
      <p>Your Cart Is Empty!!</p>
       
        </div>
      </div>
   )
  }
      </div>
  )
}

export default Carttab



