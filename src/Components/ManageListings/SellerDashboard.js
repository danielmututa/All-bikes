import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SellerDashboard = () => {
  const [listing, setListing] = useState({
    serialNumber: '',
    add: 'Cart',
    price: '',
    type: '',
    name: '',
    show: 'Show Bike',
    review: 'Bike Review',
    details: 'Details',
    detail: {
      year: '',
      model: '',
      engine: '',
      horsepower: '',
      transmission: '',
      fuelCapacity: '',
      seatHeight: '',
      weight: '',
      features: []
    },
    image: null
  });

  const [preview, setPreview] = useState(null);
  const [listings, setListings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  


  // Update fetchListings to use loading state
const fetchListings = async () => {
  setIsLoading(true);
  try {
    const response = await axios.get('https://speedbike-backend-api-production.up.railway.app/api/bikes/available');
    console.log('Fetched listings data:', response.data);
    
    if (response.data && Array.isArray(response.data.data)) {
      setListings(response.data.data);
    } else if (Array.isArray(response.data)) {
      setListings(response.data);
    } else {
      setListings([]);
    }
  } catch (error) {
    console.error('Error fetching listings:', error);
    setListings([]);
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    fetchListings();
  }, []);

  useEffect(() => {
    console.log('Current listings:', listings);
  }, [listings]);

  // Add this somewhere in your component to test the API
useEffect(() => {
  const testAPI = async () => {
    try {
      const response = await axios.get('https://speedbike-backend-api-production.up.railway.app/api/bikes');
      console.log('API Test Response:', response);
    } catch (error) {
      console.error('API Test Error:', error);
    }
  };
  
  testAPI();
}, []);



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setListing(prev => ({
        ...prev,
        image: file
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested fields
    if (name.startsWith('detail.')) {
      const nestedField = name.split('.')[1];
      setListing(prev => ({
        ...prev,
        detail: {
          ...prev.detail,
          [nestedField]: value
        }
      }));
    } else {
      setListing(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFeaturesChange = (e) => {
    const { value, checked } = e.target;
    setListing(prev => ({
      ...prev,
      detail: {
        ...prev.detail,
        features: checked
          ? [...prev.detail.features, value]
          : prev.detail.features.filter(feature => feature !== value)
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Handle image upload first
      let imageUrl = '';
      if (listing.image) {
        const formData = new FormData();
        formData.append('testImage', listing.image);
        
        const imageResponse = await axios.post(
          'https://speedbike-backend-api-production.up.railway.app/api/images', 
          formData, 
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        
        imageUrl = imageResponse.data.imageUrl;
      }


      
      // Prepare bike data
      const bikeData = {
        ...listing,
        image: imageUrl
      };

      // Submit bike listing
      if (isEditing) {
        await axios.put(`https://speedbike-backend-api-production.up.railway.app/api/bikes/${editId}`, bikeData);
      } else {
        await axios.post('https://speedbike-backend-api-production.up.railway.app/api/bikes', bikeData);
      }

      // Refresh listings
      fetchListings();
      
      // Reset form
      await fetchListings();
      resetForm();
    } catch (error) {
      console.error('Error submitting listing:', error);
      alert('Failed to submit listing. Please try again.');
    }
  };

  const resetForm = () => {
    setListing({
      serialNumber: '',
      add: 'Cart',
      price: '',
      type: '',
      name: '',
      show: 'Show Bike',
      review: 'Bike Review',
      details: 'Details',
      detail: {
        year: '',
        model: '',
        engine: '',
        horsepower: '',
        transmission: '',
        fuelCapacity: '',
        seatHeight: '',
        weight: '',
        features: []
      },
      image: null
    });
    setPreview(null);
    setIsEditing(false);
    setEditId(null);
  };

 

  const handleEdit = (bike) => {
    console.log('Editing bike:', bike);
    setListing({
      serialNumber: bike.serialNumber || '',
      add: bike.add || 'Cart',
      price: bike.price || '',
      type: bike.type || '',
      name: bike.name || '',
      show: bike.show || 'Show Bike',
      review: bike.review || 'Bike Review',
      details: bike.details || 'Details',
      detail: {
        year: bike.detail?.year || '',
        model: bike.detail?.model || '',
        engine: bike.detail?.engine || '',
        horsepower: bike.detail?.horsepower || '',
        transmission: bike.detail?.transmission || '',
        fuelCapacity: bike.detail?.fuelCapacity || '',
        seatHeight: bike.detail?.seatHeight || '',
        weight: bike.detail?.weight || '',
        features: bike.detail?.features || []
      },
      image: null
    });
    setPreview(bike.image);
    setIsEditing(true);
    setEditId(bike._id);
    window.scrollTo(0, 0); // Scroll to top to show the form
  };
  
  const handleDelete = async (id) => {
    try {
      console.log('Attempting to delete bike with ID:', id);
      const response = await axios.delete(`https://speedbike-backend-api-production.up.railway.app/api/bikes/${id}`);
      console.log('Delete response:', response);
      
      if (response.status === 200) {
        alert('Listing deleted successfully');
        await fetchListings(); // Refresh the listings
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
      alert(`Failed to delete listing: ${error.message}`);
    }
  };



  return (
    <div className="seller-container">
      <h2>{isEditing ? "Edit Your Listing" : "List Your Motorcycle"}</h2>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="seller-image-upload">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <img src={preview} alt="Preview" className='seller-inputwidth-img' />}
        </div>

        {/* Form Fields */}
        <div className="form-grid">
          <input 
            className='seller-input-form' 
            type="text" 
            name="serialNumber" 
            placeholder="Serial Number" 
            value={listing.serialNumber} 
            onChange={handleInputChange} 
            required 
          />
          <select 
            className='seller-input-form'
            name="type"
            value={listing.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Bike Type</option>
            <option value="BMW">BMW</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Honda">Honda</option>
            <option value="Kawasaki">Kawasaki</option>
            <option value="Ducati">Ducati</option>
          </select>
          <input 
            className='seller-input-form' 
            type="text" 
            name="name" 
            placeholder="Bike Name" 
            value={listing.name} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            className='seller-input-form' 
            type="number" 
            name="price" 
            placeholder="Price" 
            value={listing.price} 
            onChange={handleInputChange} 
            required 
          />
          
          {/* Nested Detail Fields */}
          <input 
            className='seller-input-form' 
            type="number" 
            name="detail.year" 
            placeholder="Year" 
            value={listing.detail.year} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            className='seller-input-form' 
            type="text" 
            name="detail.model" 
            placeholder="Model" 
            value={listing.detail.model} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            className='seller-input-form' 
            type="text" 
            name="detail.engine" 
            placeholder="Engine" 
            value={listing.detail.engine} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            className='seller-input-form' 
            type="number" 
            name="detail.horsepower" 
            placeholder="Horsepower" 
            value={listing.detail.horsepower} 
            onChange={handleInputChange} 
            required 
          />
          
          {/* Transmission Dropdown */}
          <select 
            className='seller-input-form'
            name="detail.transmission"
            value={listing.detail.transmission}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Transmission</option>
            <option value="6-speed">6-speed</option>
            <option value="5-speed">5-speed</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
          
          {/* Additional Fields */}
          <input 
            className='seller-input-form' 
            type="text" 
            name="detail.fuelCapacity" 
            placeholder="Fuel Capacity (e.g., 5.5 L)" 
            value={listing.detail.fuelCapacity} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            className='seller-input-form' 
            type="text" 
            name="detail.seatHeight" 
            placeholder="Seat Height (e.g., 32 in)" 
            value={listing.detail.seatHeight} 
            onChange={handleInputChange} 
            required 
          />
          <input 
            className='seller-input-form' 
            type="text" 
            name="detail.weight" 
            placeholder="Weight (e.g., 450 lbs)" 
            value={listing.detail.weight} 
            onChange={handleInputChange} 
            required 
          />
          
          {/* Features Checkboxes */}
          <div>
            <h4>Features</h4>
            {['ABS', 'Traction Control', 'Quick Shifter', 'Heated Grips', 'Cruise Control'].map((feature) => (
              <div key={feature}>
                <input
                  type="checkbox"
                  value={feature}
                  checked={listing.detail.features.includes(feature)}
                  onChange={handleFeaturesChange}
                />
                <label>{feature}</label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className='seller-update-listbutton'>
          {isEditing ? "Update Listing" : "List Motorcycle"}
        </button>
      </form>

      <h3>Your Listings</h3>
     
      <div className="listings">

      {isLoading ? (
    <p>Loading listings...</p>
  ) : listings && listings.length > 0 ? (
    listings.map((item) => (
      <div key={item._id} className="listing-item" style={{
        border: '1px solid #ddd',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="listing-info">
          <h4 style={{ margin: '0 0 10px 0' }}>{item.name}</h4>
          <p style={{ margin: '5px 0' }}>Type: {item.type}</p>
          <p style={{ margin: '5px 0' }}>Model: {item.detail?.model}</p>
          <p style={{ margin: '5px 0' }}>Price: ${item.price}</p>
        </div>
        <div className="seller-buttons" style={{
          display: 'flex',
          gap: '10px'
        }}>
          <button 
            style={{
              padding: '8px 16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => handleEdit(item)}
          >
            Edit
          </button>
          <button 
            style={{
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this listing?')) {
                handleDelete(item._id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>No listings available. Start by adding a new motorcycle.</p>
  )}
</div>

    </div>
  );
};

export default SellerDashboard;