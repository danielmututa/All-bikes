import React,{useContext} from 'react'
import { ShopContext } from '../context/Shop-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export const Cartitem = (props) => {
    const {id, price, image, type } = props.data
 const {cartItems, addToCart,removeFromCart,updatedCartItemCount } = useContext (ShopContext);
 const itemCount = cartItems[id] || 0;

  return (
  
  <div className='cartItem'>
   <img src={require(`../images/${image}`) } alt={type} />

   <div className="description">
    <p><b> {type}</b></p>
   <p>£{price}</p>

   <div className="countHandler">
    <button onClick={() => removeFromCart(id)}><FontAwesomeIcon icon={ faMinus }></FontAwesomeIcon></button>
    <input  value={itemCount} onChange={(e) => updatedCartItemCount(Number(e.target.value),id)}  />
    <button onClick={() => addToCart(id)}> <FontAwesomeIcon icon={ faAdd }></FontAwesomeIcon></button>
   </div>
   </div>

    </div>)
  
}



