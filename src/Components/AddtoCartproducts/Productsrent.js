import React,  { useContext,  useState  } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShopContext } from '../context/Shop-context';


const Productsrent = (props) => {



const [showDetails, setShowDetails] = useState(false);

const toggleDetails = () => {
  setShowDetails(!showDetails);
  };

const {addToCart ,cartItems } = useContext(ShopContext)

const cartItemAmount = cartItems[props.id] || 0; 

const handleAddToCart = () => {
  console.log('Adding to cart:', props.id);
  addToCart(props.id);
};


  return (
    

    <div className="Card--container">
  {showDetails && (
          <div className="details-info">
        <p>uehduiedebkebuedbd</p>
      </div>
      )}

    <img loading="lazy" src={ require('../images/' + props.image)} alt="" />

    

 <div className="text">
    <p className="type">{props.type}</p>
    <p>£{props.price}</p>

    <div className="add--details">
      <button className=' b-details-add'  onClick={toggleDetails} >
         {/* {props.details}  */}
         {showDetails ? 'Details' : 'Details'}
         </button>

         {/* {showDetails && (
          <div className="details-info">
        <p>uehduiedebkebuedbd</p>
      </div>
      )} */}

      <button className='b-details-add' onClick={handleAddToCart}>
        <FontAwesomeIcon icon={faShoppingCart}/>    {props.add} {cartItemAmount > 0 && `(${cartItemAmount})`}
          </button>
      {/* <button  className='b-details-add' onClick={() =>   addToCart(props.id)}>{props.add} {cartItemAmount > 0 && <>`(${cartItemAmount})` </>}</button> */}
      {/* <button onClick={() => addItem(props.item)} className='b-details-add'>{props.add}</button> */}
    </div>
 </div>


   
</div>


    
  )
}

export default Productsrent


