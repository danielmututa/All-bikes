// Productsrent.jsx
import React, { useContext, useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShopContext } from '../context/Shop-context';
import { useNavigate } from 'react-router-dom';

const Productsrent = ({ image, name, type, price, add, details, alldetails, _id }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(ShopContext);
  
  const cartItemAmount = cartItems[_id] || 0;

  const toggleDetails = () => {
    if (showDetails) {
      navigate('/reviews');
    } else {
      setShowDetails(true);
    }
  };

  
  const handleAddToCart = () => {
    if (!_id) {
        console.error('No _id provided to ProductsRent');
        return;
    }
    console.log('Adding to cart, _id:', _id);
    addToCart(_id); // This should trigger the context function
};


  return (
    <div className="Card--container">
      {showDetails && (
        <div className="details-info">
          <div className="details--info-flex">
            <div className="details--flex-btwn">
              <p>year :</p>
              <p>{alldetails?.year}</p>
            </div>
            <div className="details--flex-btwn">
              <p>model :</p>
              <p>{alldetails?.model}</p>
            </div>
            <div className="details--flex-btwn">
              <p>engine :</p>
              <p>{alldetails?.engine}</p>
            </div>
            <div className="details--flex-btwn">
              <p>horsepower :</p>
              <p>{alldetails?.horsepower}</p>
            </div>
            <div className="details--flex-btwn">
              <p>transmission :</p>
              <p>{alldetails?.transmission}</p>
            </div>
            <div className="details--flex-btwn">
              <p>fuelCapacity :</p>
              <p>{alldetails?.fuelCapacity}</p>
            </div>
            <div className="details--flex-btwn">
              <p>seatHeight :</p>
              <p>{alldetails?.seatHeight}</p>
            </div>
            <div className="details--flex-btwn">
              <p>weight :</p>
              <p>{alldetails?.weight}</p>
            </div>
            <div className="details--flex-btwn">
              <p>features :</p>
              <div>
                {alldetails?.features?.map((feature) => (
                  <p key={feature}>{feature}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <img src={image} alt={name} />
      <div className="text">
        <p className="type">{type}</p>
        <p>£{price}</p>
        <div className="add--details">
          <button className='b-details-add' onClick={toggleDetails}>
            {showDetails ? 'reviews' : 'Details'}
          </button>
          <button className='b-details-add' onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingCart} /> {add} {cartItemAmount > 0 && `(${cartItemAmount})`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productsrent;