import React,  { useContext,  useState  } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShopContext } from '../context/Shop-context';
import { useNavigate } from 'react-router-dom';

const Productsrent = (props) => {



const [showDetails, setShowDetails] = useState(false);

// const toggleDetails = () => {
//   setShowDetails(!showDetails);
//   };




  const toggleDetails = () => {
    if (showDetails) {
      // If showing details, navigate to reviews page
      navigate('/reviews');
    } else {
      // If showing reviews, toggle to show details
      setShowDetails(true);
    }
  };



  const navigate = useNavigate();

  // const reviews = () => {
  //   navigate('/reviews')
  // } 

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

       <div className="details--info-flex">

        <div className="details--flex-btwn">
          <p>year :</p>
       <p>{props.alldetails.year}</p>
        </div>

 <div className="details--flex-btwn">
  <p>model :</p>
        <p>{props.alldetails.model }</p>
        </div>

 <div className="details--flex-btwn">   
  <p>engine :</p>
        <p>{props.alldetails.engine }</p>
        </div>

 <div className="details--flex-btwn">
  <p>horsepower :</p>
        <p>{props.alldetails.horsepower }</p>
        </div>

 <div className="details--flex-btwn">
  <p>transmission :</p>
        <p>{props.alldetails.transmission }</p>
        </div>

 <div className="details--flex-btwn">
  <p>fuelCapacity :</p>
        <p>{props.alldetails.fuelCapacity }</p>
        </div>

 <div className="details--flex-btwn">
  <p>seatHeight :</p>
        <p>{props.alldetails.seatHeight }</p>
        </div>

 <div className="details--flex-btwn">
  <p>weight :</p>
        <p>{props.alldetails.weight }</p>
        </div>

 <div className="details--flex-btwn">
  <p>features :</p>
        <p>
            {props.alldetails.features.map((feature) => (
              <p key={feature}>{feature}</p>
            ))}
          </p>
        </div>


       </div>

      
      </div>
      )}

    <img loading="lazy" src={ require('../images/' + props.image)} alt="" />

    

 <div className="text">
    <p className="type">{props.type}</p>
    <p>£{props.price}</p>

    <div className="add--details">
      <button className=' b-details-add'  onClick={toggleDetails } >
        
         {showDetails ? 'reviews' : 'Details' }
         </button>

         

      <button className='b-details-add' onClick={handleAddToCart}>
        <FontAwesomeIcon icon={faShoppingCart}/>  {props.add}  {cartItemAmount > 0 && `(${cartItemAmount})`}
          </button>
      
    </div>
 </div>


   
</div>


    
  )
}

export default Productsrent


