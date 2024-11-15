// BookingForm.jsx
import React, { useState } from 'react';

const ServiceBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    bf_totalGuests: '',
    bf_date: '',
    bf_time: '',
    bf_hours: '',
    bf_fullname: '',
    bf_email: '',
    bf_message: '',
    bf_creditcard: '',
    bf_banktransfer: '',
    bf_paypal: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ setIsLoading] = useState(false);

  const selectservice = [
    { name: 'Oil change' },
    { name: 'Tire rotation' },
    { name: 'Brake pad replacement' },
    { name: 'Piston' },
    { name: 'Gasket' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user types
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateStep = (step) => {
    let stepErrors = {};

    if (step === 1) {
      if (!formData.bf_totalGuests) {
        stepErrors.bf_totalGuests = 'Please select a service';
      }
    } else if (step === 2) {
      if (!formData.bf_date) {
        stepErrors.bf_date = 'Date is required';
      }
      if (!formData.bf_time) {
        stepErrors.bf_time = 'Time is required';
      }
      // Check if at least one payment method is provided
      if (!formData.bf_creditcard && !formData.bf_banktransfer && !formData.bf_paypal) {
        stepErrors.payment = 'Please provide at least one payment method';
      }
    } else if (step === 3) {
      if (!formData.bf_fullname) {
        stepErrors.bf_fullname = 'Name is required';
      }
      if (!formData.bf_email) {
        stepErrors.bf_email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.bf_email)) {
        stepErrors.bf_email = 'Email is invalid';
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = (nextStep) => {
    const isValid = validateStep(currentStep);
    console.log("Validation result:", isValid);
    if (isValid) {
      setCurrentStep(nextStep);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  // Rest of your JSX remains exactly the same...
  // (I'm keeping all the return JSX code exactly as it was in your original)

  if (isSubmitted) {
    return (
      <div className="message--bookingform">
        <p>Your message was sent successfully. Thanks! We'll be in touch as soon as we can, which is usually like lightning (Unless we're sailing or eating tacos!).</p>
      </div>
    );
  }

  return (
    <div className="service--bookincontainer">
      <form id="Servicebooking-form" onSubmit={handleSubmit}>
        <div className="servicetab-content">
          {currentStep === 1 && (
            <div className="sevicetab-pane">
              <ul>
                <li>
                  <h4>Book A Service</h4>
                  <label>Select A Service Part</label>
                  <div className="errorTxt">{errors.bf_totalGuests}</div>
                  <select
                    name="bf_totalGuests"
                    value={formData.bf_totalGuests}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    {selectservice.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                    <option value="More">Other</option>
                  </select>
                </li>
                <li>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => handleNext(2)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          )}

          {currentStep === 2 && (
            <div className="tab-pane">
              <ul>
                <li>
                  <label>Select Date</label>
                  <div className="errorTxt">{errors.bf_date}</div>
                  <input
                    type="date"
                    name="bf_date"
                    value={formData.bf_date}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Select Time</label>
                  <div className="errorTxt">{errors.bf_time}</div>
                  <select
                    name="bf_time"
                    value={formData.bf_time}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="Morning">Morning 08-12:00am</option>
                    <option value="Midday">Midday 12:00-16:30pm</option>
                    <option value="Late afternoon">Late afternoon 16:30-18:00pm</option>
                  </select>
                </li>
                <li>
                  <label>Select Payment Method</label>
                  <div className="errorTxt">{errors.payment}</div>
                  <label>Credit Card</label>
                  <input
                    name="bf_creditcard"
                    placeholder="Card ID"
                    value={formData.bf_creditcard}
                    onChange={handleInputChange}
                    className="sevicetab-payment"
                  />
                  <label>Bank Transfer</label>
                  <input
                    name="bf_banktransfer"
                    placeholder="Account Number"
                    value={formData.bf_banktransfer}
                    onChange={handleInputChange}
                    className="sevicetab-payment"
                  />
                  <label>Paypal</label>
                  <input
                    name="bf_paypal"
                    placeholder="Paypal Email Address"
                    value={formData.bf_paypal}
                    onChange={handleInputChange}
                    className="sevicetab-payment"
                  />
                </li>
                <li>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => handleNext(3)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          )}

          {currentStep === 3 && (
            <div className="tab-pane">
              <ul>
                <li>
                  <label>Your first and last name</label>
                  <div className="errorTxt">{errors.bf_fullname}</div>
                  <input
                    type="text"
                    name="bf_fullname"
                    value={formData.bf_fullname}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Your email address</label>
                  <div className="errorTxt">{errors.bf_email}</div>
                  <input
                    type="email"
                    name="bf_email"
                    value={formData.bf_email}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Do you have any questions or a message? (Optional)</label>
                  <textarea
                    name="bf_message"
                    value={formData.bf_message}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ServiceBooking;