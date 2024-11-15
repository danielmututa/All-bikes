



import React, { useState } from 'react';

const Reviewandrating = () => {
  const Datafile = [
    {
      img: "bmw1.jpg",
      detail: {
        year: 2022,
        model: 'R 18',
        engine: '1.8L 2-cylinder',
        horsepower: 91,
        transmission: '6-speed',
        fuelCapacity: '4.2 gal',
        seatHeight: '27.7 in',
        weight: '592 lbs',
        features: ['ABS', 'Traction Control', 'Heated Grips']
      }
    }
  ];

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
        {Datafile.map((item) => (
          <div className="reviewandrating--img-text" key={item.detail.model}>
            <img className='reviewrating--img' src={require('../images/' + item.img)} alt="" />
            <div className="reviewanddetails--text">
              <div className="reviewandrating--text-flex"><p>Year :</p> <p>{item.detail.year}</p></div>
              <div className="reviewandrating--text-flex"><p>Model :</p> <p>{item.detail.model}</p></div>
              <div className="reviewandrating--text-flex"><p>Engine :</p> <p>{item.detail.engine}</p></div>
              <div className="reviewandrating--text-flex"><p>Horsepower :</p> <p>{item.detail.horsepower}</p></div>
              <div className="reviewandrating--text-flex"><p>Transmission :</p> <p>{item.detail.transmission}</p></div>
              <div className="reviewandrating--text-flex"><p>Fuel Capacity :</p> <p>{item.detail.fuelCapacity}</p></div>
              <div className="reviewandrating--text-flex"><p>Seat Height :</p> <p>{item.detail.seatHeight}</p></div>
              <div className="reviewandrating--text-flex"><p>Weight :</p> <p>{item.detail.weight}</p></div>
              <div className="reviewandrating--text-flex">
                <p>Features :</p>
                <p>{item.detail.features.map((feature) => (<p key={feature}>{feature}</p>))}</p>
              </div>
            </div>
          </div>
        ))}
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
