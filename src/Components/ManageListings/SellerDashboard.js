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
    image: ''
  });

  const [preview, setPreview] = useState(null);
  const [listings, setListings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  const fetchListings = async () => {
    setIsLoading(true);
    try {
      // Make the API call to your endpoint
      const response = await axios.get('https://speedbike-backend-api-production.up.railway.app/api/bikes/available');
      
      // Process the listings to ensure image URLs are handled correctly
      const processedListings = response.data.map(item => ({
        ...item,
        // The backend should already be providing the full URL through processImagePath
        // But we'll add a fallback just in case
        image: item.image ? item.image : null,
        // Ensure all nested properties are preserved
        detail: {
          ...item.detail,
          features: item.detail?.features || []
        }
      }));
  
      // Log for debugging
      console.log('Raw response data:', response.data);
      console.log('Processed listings with images:', processedListings);
      
      setListings(processedListings);
    } catch (error) {
      console.error('Error fetching listings:', error);
      if (error.response) {
        // Log more detailed error information
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      }
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
    // Validate file type
    if (!file.type.match(/^image\/(jpeg|png|gif|jpg)$/)) {
      alert('Please select a valid image file (JPEG, PNG)');
      return;
    }

    // Validate file size (5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      alert('Image size should be less than 5MB');
      return;
    }

    console.log('Selected image:', {
      name: file.name,
      type: file.type,
      size: file.size
    });

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
    
    // Validation checks remain the same...
  
    try {
      const formData = new FormData();
  
      // Append main fields
      formData.append('serialNumber', listing.serialNumber);
      formData.append('price', listing.price);
      formData.append('type', listing.type);
      formData.append('name', listing.name);
      formData.append('add', listing.add);
      formData.append('show', listing.show);
      formData.append('review', listing.review);
      formData.append('details', listing.details);
  
      // Append detail fields individually
      formData.append('detail.year', listing.detail.year);
      formData.append('detail.model', listing.detail.model);
      formData.append('detail.engine', listing.detail.engine);
      formData.append('detail.horsepower', listing.detail.horsepower);
      formData.append('detail.transmission', listing.detail.transmission);
      formData.append('detail.fuelCapacity', listing.detail.fuelCapacity);
      formData.append('detail.seatHeight', listing.detail.seatHeight);
      formData.append('detail.weight', listing.detail.weight);
  
      // Append features as individual entries
      listing.detail.features.forEach((feature, index) => {
        formData.append(`detail.features[${index}]`, feature);
      });
  
      // Append image if it exists
      if (listing.image instanceof File) {
        formData.append('image', listing.image);
      }
  
      const url = isEditing 
        ? `https://speedbike-backend-api-production.up.railway.app/api/bikes/${editId}`
        : 'https://speedbike-backend-api-production.up.railway.app/api/bikes';
  
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      };
  
      // Log the FormData entries for debugging
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
  
      const response = await axios[isEditing ? 'put' : 'post'](url, formData, config);
  
      if (response.data) {
        await fetchListings();
        resetForm();
        alert(isEditing ? 'Listing updated successfully!' : 'Bike listed successfully!');
      }
  
    } catch (error) {
      console.error('Error:', error);
      console.error('Error response:', error.response?.data);
      const errorMessage = error.response?.data?.message || error.message;
      alert(`Error: ${errorMessage}`);
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
      image: ''
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
    image: bike.image // Keep the full image URL
  });
  

  const imageUrl = bike.image?.startsWith('http') ? 
    bike.image : 
    `https://speedbike-backend-api-production.up.railway.app/api/bikes/${bike.image}`;
  setPreview(imageUrl);
  setIsEditing(true);
  setEditId(bike._id);
  window.scrollTo(0, 0);
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
    <input 
      type="file" 
      accept="image/jpeg,image/png,image/jpg,image/gif" 
      onChange={handleImageChange}
      required 
    />
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
      minLength="3"
      maxLength="50"
    />
    
    <select 
      className='seller-input-form'
      name="type"
      value={listing.type}
      onChange={handleInputChange}
      required
    >
      <option value="">Select Bike Type</option>
      <option value="Roadbike">Roadbike</option>
      <option value="Quadbike">Quadbike</option>
      <option value="Offroad">Offroad</option>
      <option value="Dirtbike">Dirtbike</option>
    </select>
    
    <input 
      className='seller-input-form' 
      type="text" 
      name="name" 
      placeholder="Bike Name" 
      value={listing.name} 
      onChange={handleInputChange} 
      required 
      minLength="2"
      maxLength="100"
    />
    
    <input 
      className='seller-input-form' 
      type="number" 
      name="price" 
      placeholder="Price" 
      value={listing.price} 
      onChange={handleInputChange} 
      required 
      min="0"
      step="0.01"
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
      min="1900"
      max={new Date().getFullYear() + 1}
    />
    
    <input 
      className='seller-input-form' 
      type="text" 
      name="detail.model" 
      placeholder="Model" 
      value={listing.detail.model} 
      onChange={handleInputChange} 
      required 
      minLength="1"
      maxLength="100"
    />
    
    <input 
      className='seller-input-form' 
      type="text" 
      name="detail.engine" 
      placeholder="Engine (e.g., 1000cc)" 
      value={listing.detail.engine} 
      onChange={handleInputChange} 
      required 
      pattern="^[0-9]+cc$|^[0-9]+\.[0-9]+cc$"
      title="Please enter engine size in cc (e.g., 1000cc)"
    />
    
    <input 
      className='seller-input-form' 
      type="number" 
      name="detail.horsepower" 
      placeholder="Horsepower" 
      value={listing.detail.horsepower} 
      onChange={handleInputChange} 
      required 
      min="1"
      max="500"
    />
    
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
    
    <input 
      className='seller-input-form' 
      type="text" 
      name="detail.fuelCapacity" 
      placeholder="Fuel Capacity (e.g., 5.5 L)" 
      value={listing.detail.fuelCapacity} 
      onChange={handleInputChange} 
      required 
      pattern="^\d+(\.\d+)?\s*L$"
      title="Please enter fuel capacity in L (e.g., 5.5 L)"
    />
    
    <input 
      className='seller-input-form' 
      type="text" 
      name="detail.seatHeight" 
      placeholder="Seat Height (e.g., 32 in)" 
      value={listing.detail.seatHeight} 
      onChange={handleInputChange} 
      required 
      pattern="^\d+(\.\d+)?\s*in$"
      title="Please enter seat height in inches (e.g., 32 in)"
    />
    
    <input 
      className='seller-input-form' 
      type="text" 
      name="detail.weight" 
      placeholder="Weight (e.g., 450 lbs)" 
      value={listing.detail.weight} 
      onChange={handleInputChange} 
      required 
      pattern="^\d+(\.\d+)?\s*lbs$"
      title="Please enter weight in lbs (e.g., 450 lbs)"
    />
    
    {/* Features Checkboxes */}
    <div>
      <h4>Features (Select at least one)</h4>
      {['ABS', 'Traction Control', 'Quick Shifter', 'Heated Grips', 'Cruise Control'].map((feature) => (
        <div key={feature}>
          <input
            type="checkbox"
            value={feature}
            checked={listing.detail.features.includes(feature)}
            onChange={handleFeaturesChange}
            required={listing.detail.features.length === 0}
          />
          <label>{feature}</label>
        </div>
      ))}
    </div>
  </div>

  <button 
    type="submit" 
    className='seller-update-listbutton'
    disabled={listing.detail.features.length === 0}
  >
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

        {item.image && (
  <img
    src={item.image}
    alt={item.name}
    style={{
      maxWidth: '150px',
      height: 'auto',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
    }}
    onError={(e) => {
      console.error('Image failed to load:', item.image);
      e.target.src = 'https://via.placeholder.com/150'; // Fallback image
      e.target.onerror = null; // Prevent infinite loop
    }}
  />
)}         
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









