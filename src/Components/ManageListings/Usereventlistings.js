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
    <div className="userevent--container">
      <h2>Upcoming Events</h2>
      <div className="userevent--allevents">
        <h3 >All Events</h3>
        {events.map((event, index) => (
          <div key={index} className="border rounded p-4 mb-4">

            <div className="userevent--cover">
             {event.image && <img src={event.image} alt={event.title} className="userevent--imgfull" />}
              <div className="userevent--overlay-cover">
              <h3>{event.title}</h3>
            <p>Date: {event.date} at {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Ticket Price: ${event.ticketPrice}</p>
            <p>Capacity: {event.capacity}</p>
              </div>
            </div>
           
           
           <div className="userevent--description">
           <p >{event.description}</p>
           </div>
           
  
            {registeredEvents.includes(index) ? (
              <p className="userevents--registered">Registered</p>
            ) : (
              <button
                onClick={() => handleOpenRegisterForm(index)}
                className="event--regester"
              >
                Register
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Registration Form Modal */}
      {showRegisterForm && (
        <div className="event--forregister--container">
          <div className="event--forregister">
            <h4 className="text-xl font-bold mb-4">Register for Event</h4>
            <form onSubmit={handleRegister}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="userevent--input-form"
              />



              <div className="userevent--regesterbtns">

              <button type="submit" className='usreevent--twobtns'>Submit</button>
              <button
                type="button"
                className='usreevent--twobtns'
                onClick={() => setShowRegisterForm(false)}
                
              >
                Cancel
              </button>


              </div>


              
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserEventListing;

