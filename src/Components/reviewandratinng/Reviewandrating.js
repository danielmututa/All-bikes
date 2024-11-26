


import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.stars === 0 || !formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields and select a star rating.');
      return;
    }
    setReviews([...reviews, { ...formData, reply: '' }]);
    setFormData({
      name: '',
      email: '',
      message: '',
      stars: 0
    });
  };

  const handleReplyChange = (e, index) => {
    setReplyText({ ...replyText, [index]: e.target.value });
  };

  const handleReplySubmit = (index) => {
    setReviews(reviews.map((review, i) =>
      i === index ? { ...review, reply: replyText[index] } : review
    ));
    setReplyText({ ...replyText, [index]: '' });
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
              <div className="review" key={index}>
                <p className='review--pname'>{review.name}</p>
                <p className="review-pemail">{review.email}</p>
                <StarDisplay className="review--star" count={review.stars} />
                <p className="message">{review.message}</p>

                {isOwner && ( // Only show reply section and reply if owner
                  <>
                    {review.reply && <p className="review--reply"><strong>Owner Reply:</strong> {review.reply}</p>}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewandrating;
