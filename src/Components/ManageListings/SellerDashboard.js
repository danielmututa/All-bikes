// SellerDashboard.jsx
import React, { useState, useEffect } from 'react';

const SellerDashboard = () => {
  const [listing, setListing] = useState({
    image: '',
    bikeType: '',
    price: '',
    year: '',
    model: '',
    engine: '',
    horsepower: '',
    transmission: '',
    fuelCapacity: '',
    seatHeight: '',
    weight: '',
    features: '',
  });

  const [preview, setPreview] = useState(null);
  const [listings, setListings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
    setListings(storedListings);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setListing({ ...listing, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListing(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedListings = [...listings];

    if (isEditing) {
      // Update the existing listing
      updatedListings[editIndex] = listing;
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add a new listing
      updatedListings.push(listing);
    }

    setListings(updatedListings);
    localStorage.setItem('listings', JSON.stringify(updatedListings));
    resetForm();
  };

  const resetForm = () => {
    setListing({
      image: '',
      bikeType: '',
      price: '',
      year: '',
      model: '',
      engine: '',
      horsepower: '',
      transmission: '',
      fuelCapacity: '',
      seatHeight: '',
      weight: '',
      features: '',
    });
    setPreview(null);
  };

  const handleEdit = (index) => {
    setListing(listings[index]);
    setPreview(listings[index].image ? URL.createObjectURL(listings[index].image) : null);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedListings = [...listings];
    updatedListings.splice(index, 1);
    setListings(updatedListings);
    localStorage.setItem('listings', JSON.stringify(updatedListings));
  };

  return (
    <div className="container">
      <h2>{isEditing ? "Edit Your Listing" : "List Your Motorcycle"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="image-upload">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <img src={preview} alt="Preview" style={{ maxWidth: '300px', marginTop: '10px' }} />}
        </div>

        <div className="form-grid">
          <input type="text" name="bikeType" placeholder="Bike Type" value={listing.bikeType} onChange={handleInputChange} />
          <input type="number" name="price" placeholder="Price" value={listing.price} onChange={handleInputChange} />
          <input type="number" name="year" placeholder="Year" value={listing.year} onChange={handleInputChange} />
          <input type="text" name="model" placeholder="Model" value={listing.model} onChange={handleInputChange} />
          <input type="text" name="engine" placeholder="Engine" value={listing.engine} onChange={handleInputChange} />
          <input type="text" name="horsepower" placeholder="Horsepower" value={listing.horsepower} onChange={handleInputChange} />
          <input type="text" name="transmission" placeholder="Transmission" value={listing.transmission} onChange={handleInputChange} />
          <input type="text" name="fuelCapacity" placeholder="Fuel Capacity" value={listing.fuelCapacity} onChange={handleInputChange} />
          <input type="text" name="seatHeight" placeholder="Seat Height" value={listing.seatHeight} onChange={handleInputChange} />
          <input type="text" name="weight" placeholder="Weight" value={listing.weight} onChange={handleInputChange} />
          <textarea name="features" placeholder="Features" value={listing.features} onChange={handleInputChange} />
        </div>

        <button type="submit">{isEditing ? "Update Listing" : "List Motorcycle"}</button>
      </form>

      <h3>Your Listings</h3>
      <div className="listings">
        {listings.map((item, index) => (
          <div key={index} className="listing-item">
            <h4>{item.bikeType} - {item.model}</h4>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerDashboard;