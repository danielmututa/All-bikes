import React,{useContext} from 'react'
import { ShopContext } from '../context/Shop-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd , faTrash , faMinus  } from '@fortawesome/free-solid-svg-icons'

export const Cartitem = (props) => {
    const {_id, price, image, type } = props.data
 const {cartItems, addToCart,removeFromCart,updatedCartItemCount, deleteFromCart } = useContext (ShopContext);
 const itemCount = cartItems[_id] || 0;

  return (
  
  <div className='cartItem'>
   <img loading="lazy" src={image} alt={type} />

   <div className="description">
    {/* <div className="line"><span className='top-line'></span></div> */}
    <p><b> {type}</b></p>
   <p className='price' >£{price}</p>

   <div className="countHandler">
    <button onClick={() => removeFromCart(_id)}><FontAwesomeIcon icon={ faMinus }></FontAwesomeIcon></button>
    <input  value={itemCount} onChange={(e) => updatedCartItemCount(Number(e.target.value),_id)}  />
    <button onClick={() => addToCart(_id)}> <FontAwesomeIcon icon={ faAdd }></FontAwesomeIcon></button>
   </div>
   </div>

   <div className="trash">

    <p onClick={() => deleteFromCart(_id)}><FontAwesomeIcon className='bin' icon={faTrash} /></p>
   </div>

    </div>)
  
}



