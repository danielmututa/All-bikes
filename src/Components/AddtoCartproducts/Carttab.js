import React, { useContext } from 'react'
import DataCards from '../Datafile/Datafile'
import { ShopContext } from '../context/Shop-context'
import { Cartitem } from './Cartitem'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Carttab = () => {
 const {cartItems ,  getTotalCartAmount} = useContext(ShopContext);
 const totalAmount =  getTotalCartAmount();
 const navigate = useNavigate();

const purchasebtn = () =>{
  navigate('/payments')
} 
 console.log('Cart Items:', cartItems);

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
        {DataCards.map((product)=> {
          if(cartItems[product.id] > 0) {
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

    <span className='top-line'></span>
      <p className='totalamount'>Subtotal: <span className='color--btn'> £{totalAmount}</span></p>
      <div className="checkout--button">
      <button onClick={() => navigate('/Rentabike')}>Continue <FontAwesomeIcon icon={faShoppingCart}/></button>
      <button onClick={purchasebtn}>Purchase</button>
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



