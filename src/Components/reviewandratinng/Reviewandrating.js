


import { useLocation } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const Reviewandrating = () => {
  const location = useLocation();
  const { image, alldetails} = location.state || {};

 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    stars: 0
  });
  const [reviews, setReviews] = useState([]);
  const [replyText, setReplyText] = useState({});
  const isOwner = true; // Set this dynamically if needed

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
  const handleStarClick = (starCount) => {
    setFormData(prevState => ({
      ...prevState,
      stars: starCount
    }));
  };

 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (formData.stars === 0 || !formData.name || !formData.email || !formData.message) {
  //     alert('Please fill in all fields and select a star rating.');
  //     return;
  //   }
  
  //    // Log the bikeId to verify it exists
  // console.log('bikeId:', bikeId);
  
  //   try {
  //     const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/reviews', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         bikeId: bikeId, // Make sure bikeId is a valid MongoDB ObjectId
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message,
  //         stars: formData.stars
  //       }),
  //     });


  //   const data = await response.json();
  //   console.log('Response:', data); // Log
  
  //     if (!response.ok) throw new Error('Failed to submit review.');
  //     const result = await response.json();
  //     if (result.success) {
  //       alert('Review submitted successfully!');
  //       setReviews((prevReviews) => [...prevReviews, result.review]);
  //       setFormData({ name: '', email: '', message: '', stars: 0 });
  //     }
  //   } catch (error) {
  //     console.error('Error submitting review:', error);
  //     alert(error.message || 'Failed to submit review. Please try again.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log all form data and bikeId
    console.log('Submitting form with data:', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      stars: formData.stars
    });
  
    // Detailed validation
    const missingFields = [];
    if (!formData.name) missingFields.push('name');
    if (!formData.email) missingFields.push('email');
    if (!formData.message) missingFields.push('message');
    if (formData.stars === 0) missingFields.push('stars');
  
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }
  
    try {
      const requestBody = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        stars: formData.stars
      };
  
      console.log('Sending request with body:', requestBody);
  
      const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json();
      console.log('Server response:', data);
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit review.');
      }
  
      alert('Review submitted successfully!');
      setReviews((prevReviews) => [...prevReviews, data.review]);
      setFormData({ name: '', email: '', message: '', stars: 0 });
    } catch (error) {
      console.error('Error submitting review:', error);
      alert(error.message || 'Failed to submit review. Please try again.');
    }
  };



  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://speedbike-backend-api-production.up.railway.app/api/reviews/bikes`);
        if (!response.ok) throw new Error('Failed to fetch reviews.');
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      }
    };
    fetchReviews();
  }, []);



  const handleReplyChange = (e, index) => {
    setReplyText({ ...replyText, [index]: e.target.value });
  };



  const handleReplySubmit = async (reviewId, index) => {
    const reply = replyText[index];
    if (!reply) {
      alert('Please enter a reply.');
      return;
    }
    try {
      const response = await fetch(`https://speedbike-backend-api-production.up.railway.app/api/reviews/${reviewId}/reply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ownerResponse: reply }),
      });
      if (!response.ok) throw new Error('Failed to submit reply.');
      alert('Reply submitted successfully!');
      const updatedReviews = reviews.map((review) =>
        review._id === reviewId ? { ...review, ownerResponse: reply } : review
      );
      setReviews(updatedReviews);
      setReplyText({ ...replyText, [index]: '' });
    } catch (error) {
      console.error('Error submitting reply:', error);
      alert('Failed to submit reply. Please try again.');
    }
  };


  const Star = ({ filled, onClick }) => (
    <span
      className="star"
      style={{ color: filled ? '#fff700' : '#9e9e9e' }}
      onClick={onClick}
    >
      ★
    </span>
  );

  const StarDisplay = ({ count }) => {
    return (
      <div className="starContainer">
        {[...Array(count)].map((_, index) => (
          <span key={index} className='star' style={{ color: '#fff700' }}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className='reviewandrating--container'>
      <div className="reviewandrating--datafile">
       
          <div className="reviewandrating--img-text" >
            <img className='reviewrating--img' src={image} alt="name" />
            <div className="reviewanddetails--text">
            {Object.entries(alldetails || {}).map(([key, value]) => (
              <div className="reviewandrating--text-flex" key={key}>
                 <p>{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
                <p>
                {Array.isArray(value)
      ? value.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ))
      : value}
                  
                  </p>
        </div>
      ))}

{/*             
                <p>Features :</p>
                <p>{item.detail.features.map((feature) => (<p key={feature}>{feature}</p>))}</p>
              </div> */} 
            </div>
          </div>
    
      </div>
      <div className="reviewsandrating--allreviews">
        <div className="reviewandrating--stars">
          <h2>Write a review</h2>
          <div id="reviewContainer">
            <form className='reviewall--form-counter' onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="starContainer">
                  {[1, 2, 3, 4, 5].map((starCount) => (
                    <Star
                      key={starCount}
                      filled={starCount <= formData.stars}
                      onClick={() => handleStarClick(starCount)}
                    />
                  ))}
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder='Name'
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder='Email'
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="comment"
                  required
                  placeholder='Message'
                />
              </div>
              <button className='reviewandrating--button' type="submit">Submit</button>
            </form>
          </div>
         
          <div id="reviewSection">
  <hr />
  {reviews.map((review, index) => (
    // review && review._id ? (
      <div className="review" key={review._id}>
        <p className='review--pname'>{review.name}</p>
        <p className="review-pemail">{review.email}</p>
        <StarDisplay className="review--star" count={review.stars} />
        <p className="message">{review.message}</p>

        {isOwner && (
          <>
            {review.ownerResponse && (
              <p className="review--reply">
                <strong>Owner Reply:</strong> {review.ownerResponse}
              </p>
            )}

            {!review.ownerResponse && (
              <div className="reply-section">
                <textarea
                  placeholder="Write a reply..."
                  value={replyText[index] || ''}
                  onChange={(e) => handleReplyChange(e, index)}
                  className="reply-input"
                />
                <button
  className='review--button-reply'
  onClick={() => handleReplySubmit(review._id, index)}
  disabled={!replyText[index]}
>
  Reply
</button>
              </div>
            )}
          </>
        )}
      </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Reviewandrating;












// const Reviewandrating = () => {
//   const location = useLocation();
//   const { image, alldetails } = location.state || {};
//   // Remove bikeId since we don't need it anymore
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     stars: 0
//   });
//   const [reviews, setReviews] = useState([]);
//   const [replyText, setReplyText] = useState({});
//   const isOwner = true;

//   // handleInputChange and handleStarClick remain the same

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate required fields
//     const missingFields = [];
//     if (!formData.name) missingFields.push('name');
//     if (!formData.email) missingFields.push('email');
//     if (!formData.message) missingFields.push('message');
//     if (formData.stars === 0) missingFields.push('stars');
  
//     if (missingFields.length > 0) {
//       alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
//       return;
//     }
  
//     try {
//       const requestBody = {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//         stars: formData.stars
//       };
  
//       console.log('Sending request with body:', requestBody);
  
//       const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/reviews', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody)
//       });
  
//       const data = await response.json();
//       console.log('Server response:', data);
  
//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to submit review.');
//       }
  
//       alert('Review submitted successfully!');
//       setReviews((prevReviews) => [...prevReviews, data.review]);
//       setFormData({ name: '', email: '', message: '', stars: 0 });
//     } catch (error) {
//       console.error('Error submitting review:', error);
//       alert(error.message || 'Failed to submit review. Please try again.');
//     }
//   };

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         // Updated to fetch all reviews since we don't filter by bikeId anymore
//         const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/reviews');
//         if (!response.ok) throw new Error('Failed to fetch reviews.');
//         const data = await response.json();
//         setReviews(data.reviews || []);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//         setReviews([]);
//       }
//     };
//     fetchReviews();
//   }, []); // Removed bikeId dependency

//   // Rest of your component remains the same...