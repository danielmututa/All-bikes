// // UserEventListing.jsx
// import React, { useState, useEffect } from 'react';

// const UserEventListing = () => {
//   const [events, setEvents] = useState([]);
//   const [registeredEvents, setRegisteredEvents] = useState([]);

//   useEffect(() => {
//     // Load events from localStorage
//     const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
//     setEvents(storedEvents);
//   }, []);

//   const handleEventRegistration = (eventId) => {
//     if (!registeredEvents.includes(eventId)) {
//       setRegisteredEvents([...registeredEvents, eventId]);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
//       <div className="mb-8">
//         <h3 className="text-xl font-bold mb-4">All Events</h3>
//         {events.map((event, index) => (
//           <div key={index} className="border rounded p-4 mb-4">
//             {event.image && <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-2 rounded" />}
//             <h5>{event.title}</h5>
//             <p>Date: {event.date} at {event.time}</p>
//             <p>Location: {event.location}</p>
//             <p>Ticket Price: ${event.ticketPrice}</p>
//             <p>Capacity: {event.capacity}</p>
//             <p>{event.description}</p>
//             <button
//               onClick={() => handleEventRegistration(index)}
//               className="bg-blue-500 text-white px-2 py-1 rounded"
//             >
//               Register
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserEventListing;









// UserEventListing.jsx
import React, { useState, useEffect } from 'react';

const UserEventListing = () => {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Load events from localStorage
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleOpenRegisterForm = (eventId) => {
    setSelectedEventId(eventId);
    setShowRegisterForm(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email) {
      setRegisteredEvents([...registeredEvents, selectedEventId]);
      setShowRegisterForm(false);
      setEmail('');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">All Events</h3>
        {events.map((event, index) => (
          <div key={index} className="border rounded p-4 mb-4">
            {event.image && <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-2 rounded" />}
            <h5>{event.title}</h5>
            <p>Date: {event.date} at {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Ticket Price: ${event.ticketPrice}</p>
            <p>Capacity: {event.capacity}</p>
            <p>{event.description}</p>
            {registeredEvents.includes(index) ? (
              <p className="text-green-500">Registered</p>
            ) : (
              <button
                onClick={() => handleOpenRegisterForm(index)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Register
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Registration Form Modal */}
      {showRegisterForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Register for Event</h3>
            <form onSubmit={handleRegister}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-2 border rounded mb-4"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
              <button
                type="button"
                onClick={() => setShowRegisterForm(false)}
                className="ml-4 text-gray-500"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserEventListing;

