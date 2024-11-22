// Productsfile.jsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Productsrent from './Productsrent'; // Import the separate component

const Productsfile = () => {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBikes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://speedbike-backend-api-production.up.railway.app/api/bikes/available');
        const bikeData = response.data.data || response.data || [];
        setItems(bikeData);
        setOriginalItems(bikeData);
      } catch (error) {
        console.error('Error fetching bikes:', error);
        setItems([]);
        setOriginalItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBikes();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const searchedItems = originalItems.filter((item) => {
      return (
        item.name?.toLowerCase().includes(query) ||
        item.type?.toLowerCase().includes(query)
      );
    });
    setItems(searchedItems);
  };

  const filterItem = (type) => {
    const filteredItems = originalItems.filter((item) => item.type === type);
    setItems(filteredItems);
  };

  const resetItems = () => {
    setItems(originalItems);
  };

  return (
    <div className="pro--section--container">
      <div className="pro--section">
        <div className="pro--section--heading">
          <h3>Explore our option</h3>
          <div className="search--baricon">
            <FontAwesomeIcon className="searchbar" icon={faSearch} />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search bikes"
            />
          </div>
        </div>

        <div className="All-purchase-btns">
          <div>
            <button className="btn" onClick={resetItems}>All</button>
          </div>
          {['BMW', 'Yamaha', 'Honda', 'Kawasaki', 'Ducati'].map((type) => (
            <div className="btn" key={type}>
              <button onClick={() => filterItem(type)}>{type}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="Stock--container">
        {isLoading ? (
          <p>Loading bikes...</p>
        ) : items.length > 0 ? (
          items.map((item) => (
            <Productsrent
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              type={item.type}
              price={item.price}
              add={item.add || "Add to Cart"}
              details={item.details || "View Details"}
              alldetails={item.detail}
            />
          ))
        ) : (
          <p>No bikes found</p>
        )}
      </div>
    </div>
  );
};

export default Productsfile;