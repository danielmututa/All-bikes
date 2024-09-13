import React, { useContext } from 'react'
import DataCards from '../Datafile/Datafile'
import { ShopContext } from '../context/Shop-context'
import { Cartitem } from './Cartitem'
import { useNavigate } from 'react-router-dom'
const Carttab = () => {
 const {cartItems ,  getTotalCartAmount} = useContext(ShopContext);
 const totalAmount =  getTotalCartAmount();
 const navigate = useNavigate();

 console.log('Cart Items:', cartItems);

  return (
    <div className='cart'>

      <div className='cart--header'>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart--flex">

      
      {/* <div>
        <h1>Your Cart Items</h1>
      </div>  */}

      <div className='cartItems'>
        {DataCards.map((product)=> {
          if(cartItems [product.id] > 0) {
            return <Cartitem key={product.id} data = {product} />
          }
          return null
        })}

      </div>
      </div>
      {totalAmount > 0 ? 
      <div className="checkout--container">
        <div className="background--color">       
    <div className="checkout">
      <p>Subtotal: <span className='color--btn'> £{totalAmount}</span></p>
      <div className="checkout--button">
      <button onClick={() => navigate('/Rentabike')}>Continue Shopping</button>
      <button>Checkout</button>
      </div>
      </div> 
      </div>
      </div>   
    : (
    <h3>Your Cart is Empty</h3>
   )
  }
      </div>
  )
}

export default Carttab



