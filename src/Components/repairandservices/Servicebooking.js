// BookingForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ServiceBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   bikeRegistration: '',
  //   bikeModel: '',
  //   bikeBrand: 'BMW',
  //   serviceType: '',
  //   specificParts: [{
  //     partName: '',
  //     quantity: 1,
  //     additionalDetails: ''
  //   }],
  //   paymentMethod: '',
  //   paymentAmount: 0,
  //   bookingDate: '',
  //   bookingTime: '',
  //   additionalNotes: ''
  // });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bikeRegistration: '',
    bikeModel: '',
    bikeBrand: 'BMW',
    serviceType: '',
    specificParts: [{
      partName: '',
      quantity: 1,
      additionalDetails: ''
    }],
    paymentMethod: '',
    paymentAmount: 0,
    bookingDate: '',
    bookingTime: '',
    additionalNotes: '',
    userId: '' // Ensure this field exists in the form data
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const bikeBrands = ['BMW', 'Yamaha', 'Honda', 'Kawasaki', 'Ducati', 'Other'];
  const serviceTypes = [
    'Regular Maintenance',
    'Oil Change',
    'Brake Service',
    'Tire Replacement',
    'Full Tune-up',
    'Diagnostic Check',
    'Electrical System Check',
    'Other'
  ];
  const paymentMethods = ['Card', 'Cash', 'Bank Transfer'];
  const timeSlots = [
    'Morning 08-12:00am',
    'Midday 12:00-16:30pm',
    'Late afternoon 16:30-18:00pm'
  ];

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handlePartsChange = (index, field, value) => {
    const updatedParts = [...formData.specificParts];
    updatedParts[index][field] = value;
    setFormData(prev => ({
      ...prev,
      specificParts: updatedParts
    }));
  };

  const addPart = () => {
    if (formData.specificParts.length < 5) {
      setFormData(prev => ({
        ...prev,
        specificParts: [
          ...prev.specificParts,
          { partName: '', quantity: 1, additionalDetails: '' }
        ]
      }));
    }
  };

  const removePart = (index) => {
    setFormData(prev => ({
      ...prev,
      specificParts: prev.specificParts.filter((_, i) => i !== index)
    }));
  };

  const validateStep = (step) => {
    let stepErrors = {};

    if (step === 1) {
      if (!formData.serviceType) {
        stepErrors.serviceType = 'Please select a service type';
      }
      if (!formData.bikeRegistration) {
        stepErrors.bikeRegistration = 'Bike registration is required';
      }
      if (!formData.bikeModel) {
        stepErrors.bikeModel = 'Bike model is required';
      }
      if (!formData.bikeBrand) {
        stepErrors.bikeBrand = 'Bike brand is required';
      }
      
      // Validate specific parts
      formData.specificParts.forEach((part, index) => {
        if (!part.partName) {
          stepErrors[`partName${index}`] = 'Part name is required';
        }
        if (part.quantity < 1) {
          stepErrors[`quantity${index}`] = 'Quantity must be at least 1';
        }
      });
    } else if (step === 2) {
      if (!formData.bookingDate) {
        stepErrors.bookingDate = 'Date is required';
      } else {
        const selectedDate = new Date(formData.bookingDate);
        if (selectedDate < new Date()) {
          stepErrors.bookingDate = 'Booking date must be in the future';
        }
      }
      
      if (!formData.bookingTime) {
        stepErrors.bookingTime = 'Time is required';
      }
      if (!formData.paymentMethod) {
        stepErrors.paymentMethod = 'Payment method is required';
      }
      if (!formData.paymentAmount || formData.paymentAmount <= 0) {
        stepErrors.paymentAmount = 'Valid payment amount is required';
      }
    } else if (step === 3) {
      if (!formData.firstName) {
        stepErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        stepErrors.lastName = 'Last name is required';
      }
      if (!formData.email) {
        stepErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = 'Email is invalid';
      }
      if (!formData.phone) {
        stepErrors.phone = 'Phone is required';
      } else if (!/^[0-9]{10}$/.test(formData.phone)) {
        stepErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = (nextStep) => {
    if (validateStep(currentStep)) {
      setCurrentStep(nextStep);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateStep(3)) {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.post('https://speedbike-backend-api-production.up.railway.app/api/bookings', {
  //         ...formData,
  //         userId: '65f7d123e12745678901234' // Replace with actual user ID
  //       });
        
  //       if (response.status === 201 || response.status === 200) {
  //         setIsSubmitted(true);
  //       }
  //     } catch (error) {
  //       setErrors({
  //         submit: error.response?.data?.message || 'An error occurred during submission'
  //       });
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsLoading(true);
      const submissionData = {
        ...formData,
        status: 'Pending', // Ensure the status is set to 'Pending' by default
        createdAt: new Date().toISOString(), // Automatically set createdAt
        updatedAt: new Date().toISOString(), // Automatically set updatedAt
        userId: formData.userId || '64f9e1d9dff95512345a67c8', // Default userId if not provided
      };

      try {
        const response = await axios.post('https://speedbike-backend-api-production.up.railway.app/api/bookings', submissionData);
        if (response.status === 201 || response.status === 200) {
          setIsSubmitted(true);
        }
      } catch (error) {
        setErrors({
          submit: error.response?.data?.message || 'An error occurred during submission'
        });
      } finally {
        setIsLoading(false);
      }
    }
};




  if (isSubmitted) {
    return (
      <div className="message--bookingform">
        <p>Your booking was submitted successfully! We'll contact you shortly to confirm your appointment.</p>
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
                  <div className="errorTxt">{errors.serviceType}</div>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </li>

                <li>
                  <label>Bike Registration Number</label>
                  <div className="errorTxt">{errors.bikeRegistration}</div>
                  <input
                    type="text"
                    name="bikeRegistration"
                    value={formData.bikeRegistration}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Bike Model</label>
                  <div className="errorTxt">{errors.bikeModel}</div>
                  <input
                    type="text"
                    name="bikeModel"
                    value={formData.bikeModel}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Bike Brand</label>
                  <div className="errorTxt">{errors.bikeBrand}</div>
                  <select
                    name="bikeBrand"
                    value={formData.bikeBrand}
                    onChange={handleInputChange}
                  >
                    {bikeBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </li>
                {formData.specificParts.map((part, index) => (
                  <li key={index}>
                    <h5>Part {index + 1}</h5>
                    <div>
                      <label>Part Name</label>
                      <div className="errorTxt">{errors[`partName${index}`]}</div>
                      <input
                        type="text"
                        value={part.partName}
                        onChange={(e) => handlePartsChange(index, 'partName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Quantity</label>
                      <div className="errorTxt">{errors[`quantity${index}`]}</div>
                      <input
                        type="number"
                        min="1"
                        value={part.quantity}
                        onChange={(e) => handlePartsChange(index, 'quantity', e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Additional Details</label>
                      <textarea
                        value={part.additionalDetails}
                        onChange={(e) => handlePartsChange(index, 'additionalDetails', e.target.value)}
                      />
                    </div>
                    {index > 0 && (
                      <button type="button" onClick={() => removePart(index)}>Remove Part</button>
                    )}
                  </li>
                ))}
                 {formData.specificParts.length < 5 && (
                  <li>
                    <button type="button" onClick={addPart}>Add Another Part</button>
                  </li>
                )}

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
                  <div className="errorTxt">{errors.bookingDate}</div>
                  <input
                    type="date"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </li>
                <li>
                  <label>Select Time</label>
                  <div className="errorTxt">{errors.bookingTime}</div>
                  <select
                    name="bookingTime"
                    value={formData.bookingTime}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </li>
                <li>
                  <label>Payment Method</label>
                  <div className="errorTxt">{errors.paymentMethod}</div>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Payment Method</option>
                    {paymentMethods.map((method) => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                  </li>
                  <li>
                  <label>Payment Amount</label>
                  <div className="errorTxt">{errors.paymentAmount}</div>
                  <input
                    type="number"
                    name="paymentAmount"
                    value={formData.paymentAmount}
                    onChange={handleInputChange}
                    min="0"
                  />
                </li>
                <li>
                  <button type="button" onClick={handleBack}>Back</button>
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
                  <label>First Name</label>
                  <div className="errorTxt">{errors.firstName}</div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Last Name</label>
                  <div className="errorTxt">{errors.lastName}</div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </li>

                <li>
                  <label>Email</label>
                  <div className="errorTxt">{errors.email}</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </li>

                <li>
                  <label>Phone</label>
                  <div className="errorTxt">{errors.phone}</div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                  />
                </li>
                <li>
                  <label>Additional Notes (Optional)</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    maxLength="500"
                  />
                </li>
                <li>
                  {errors.submit && <div className="errorTxt">{errors.submit}</div>}
                  <button type="button" onClick={handleBack}>Back</button>
                  <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit Booking'}
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