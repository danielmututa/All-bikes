// UserListing.jsx
import React, { useState, useEffect } from 'react';

const UserListing = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
    setListings(storedListings);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Available Motorcycles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <div key={index} className="border rounded p-4">
            {listing.image && (
              <img
                src={URL.createObjectURL(listing.image)}
                alt={listing.model}
                className="w-full h-48 object-cover mb-2 rounded"
              />
            )}
            <h3 className="text-lg font-bold">{listing.bikeType} - {listing.model}</h3>
            <p>Price: ${listing.price}</p>
            <p>Year: {listing.year}</p>
            <p>Engine: {listing.engine}</p>
            <p>Transmission: {listing.transmission}</p>
            <p>Fuel Capacity: {listing.fuelCapacity}</p>
            <p>Weight: {listing.weight}</p>
            <p>Features: {listing.features}</p>
            <p>Contact: {listing.sellerName}, {listing.contactNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListing;
