// MechanicEventManagement.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MechanicEventManagement = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: '',
    ticketPrice: '',
    capacity: ''
  });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // Load events from localStorage when the component mounts
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) {
      setNewEvent({ ...newEvent, image: URL.createObjectURL(file) });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };

  const addEvent = () => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Save events to localStorage
    setNewEvent({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: '',
      ticketPrice: '',
      capacity: ''
    });
    setPreview(null);
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((_, index) => index !== id);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Update localStorage
  };

  return (
    <div className="event-container">
      <h2 className="event--management">Event Management</h2>
      <div className='event--allforms'>
        <input type="file" accept="image/*" onChange={handleImageChange} className="event--uploadimg" />
        {preview && <img src={preview} alt="Preview" className="event--imgsize" />}
  

  <div className="event--flexwrap"> 
        <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleEventChange} className="event--input-form" />
        <input type="date" name="date" value={newEvent.date} onChange={handleEventChange} className="event--input-form" />
        <input type="time" name="time" value={newEvent.time} onChange={handleEventChange} className="event--input-form" />
        <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleEventChange} className="event--input-form"/>
        <input type="number" name="ticketPrice" placeholder="Ticket Price" value={newEvent.ticketPrice} onChange={handleEventChange} className="event--input-form" />
        <input type="number" name="capacity" placeholder="Capacity" value={newEvent.capacity} onChange={handleEventChange} className="event--input-form" />
        <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleEventChange} className="event--input-formtextarea"  />
        </div>
        <button onClick={addEvent} className="event--delete">Add Event</button>
      </div>

      {/* Display Events */}
      <div className="mt-8">
        {events.map((event, index) => (
          <div key={index} className="event--allsection">
            {event.image && <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-2 rounded" />}
            <h5>{event.title}</h5>
            <p>Date: {event.date} at {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Ticket Price: ${event.ticketPrice}</p>
            <p>Capacity: {event.capacity}</p>
            <p>{event.description}</p>
            <button onClick={() => deleteEvent(index)} className="event--delete">Delete</button>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/usermechanics')} className="event--gotolistings">Go to User Event Listing</button>
    </div>
  );
};

export default MechanicEventManagement;
