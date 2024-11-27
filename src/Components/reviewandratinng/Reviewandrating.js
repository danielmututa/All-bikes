


import { useLocation } from 'react-router-dom';
import React, { useState,useEffect } from 'react';

const Reviewandrating = () => {
  const location = useLocation();
  const { image, alldetails} = location.state || {};

  const Star = ({ filled, onClick }) => (
    <span
      className="star"
      style={{ color: filled ? '#fff700' : '#9e9e9e' }}
      onClick={onClick}
    >
      ★
    </span>
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    stars: 0
  });
  const [reviews, setReviews] = useState([]);
  const [replyText, setReplyText] = useState({});

  // Set this to true if the logged-in user is the owner
  const isOwner = true; 

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

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.stars === 0 || !formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields and select a star rating.');
      return;
    }
  
    try {
      const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, bikeId: alldetails?.id }), // Pass the bike ID if needed
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit review.');
      }
  
      const result = await response.json();
      alert('Review submitted successfully!');
      
      // Update reviews state with the newly submitted review
      setReviews(prevReviews => [...prevReviews, result.review]);

  
      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: '',
        stars: 0,
      });
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting your review.');
    }
  };
  






  // useEffect(() => {
  //   const fetchReviews = async () => {

  //     // Check if alldetails and alldetails.id are valid
   
  //     try {
  //       const response = await fetch(`https://speedbike-backend-api-production.up.railway.app/api/reviews/bikes/${alldetails?.id}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch reviews.');
  //       }
  
  //       const data = await response.json();

  //       // setReviews(data.reviews);
  //       setReviews(Array.isArray(data.reviews) ? data.reviews.filter(r => r && r.name) : []); // Populate reviews state
  //     } catch (error) {
  //       console.error(error);
  //       alert('An error occurred while fetching reviews.');
  //     }
  //   };
  
  //   if (alldetails?.id) {
  //     fetchReviews();
  //   }
  // }, [alldetails]);


  useEffect(() => {
    const fetchReviews = async () => {
      // Check if alldetails and alldetails.id are valid
      if (!alldetails?.id) {
        console.error("No bike ID found in alldetails.");
        return;
      }
  
      try {
        const response = await fetch(`https://speedbike-backend-api-production.up.railway.app/api/reviews/bikes/${alldetails._id}`);
        
        // Check if response is valid
        if (!response.ok) {
          throw new Error('Failed to fetch reviews.');
        }
  
        const data = await response.json();
        console.log("Fetched reviews:", data);  // Log the response to check structure
  
        // Assuming the API returns a `reviews` field with an array
        if (Array.isArray(data.reviews)) {
          setReviews(data.reviews.filter(r => r && r.name)); // Filter out invalid reviews
        } else {
          console.error("Reviews are not in expected array format:", data.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        alert('An error occurred while fetching reviews.');
      }
    };
  
    if (alldetails?.id) {
      fetchReviews();
    }
  }, [alldetails]);
  






  const handleReplyChange = (e, index) => {
    setReplyText({ ...replyText, [index]: e.target.value });
  };

  




  const handleReplySubmit = async (index) => {
    const reviewToReply = reviews[index];
  
    try {
      const response = await fetch(`https://speedbike-backend-api-production.up.railway.app/api/reviews/bikes/${alldetails?._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reply: replyText[index] }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit reply.');
      }
  
      const updatedReview = await response.json();
  
      // Update the review in the state
      setReviews(reviews.map((review, i) =>
        i === index ? updatedReview : review
      ));
  
      // Clear the reply text
      setReplyText({ ...replyText, [index]: '' });
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting your reply.');
    }
  };
  








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
    review ? (
      <div className="review" key={review._id || index}>
        <p className='review--pname'>{review.name || 'Anonymous'}</p>
        <p className="review-pemail">{review.email}</p>
        <StarDisplay className="review--star" count={review.stars || 0} />
        <p className="message">{review.message}</p>

        {isOwner && ( // Only show reply section and reply if owner
          <>
            {review.ownerResponse && (
              <p className="review--reply">
                <strong>Owner Reply:</strong> {review.ownerResponse}
              </p>
            )}

            <div className="reply-section">
              <textarea
                placeholder="Write a reply..."
                value={replyText[index] || ''}
                onChange={(e) => handleReplyChange(e, index)}
                className="reply-input"
              />
              <button className='review--button-reply' onClick={() => handleReplySubmit(index)}>Reply</button>
            </div>
          </>
        )}
      </div>
    ) : null // Return null if review is invalid
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Reviewandrating;
