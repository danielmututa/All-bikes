// // BookingForm.jsx

// import React, { useState } from 'react';
// import axios from 'axios'; 

// const MotBooking = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     bikeRegistrationNumber: '',
//     bikeMake: '',
//     bikeModel: '',
//     engineSize: '',
//     motDate: '',
//     motCenter: '',
//     serviceRequired: '',
//     additionalServices: [],
//     paymentMethod: '',
//     paymentAmount: '',
//     paymentDetails: {
//       paypal: { paypalEmail: '' },
//       stripe: { customerID: '', paymentMethodID: '' },
//       bankTransfer: {
//         bankName: '',
//         accountNumber: '',
//         routingNumber: '',
//         accountHolderName: ''
//       }
//     }
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [ setIsLoading] = useState(false);

//   const selectservice = [
//     { name: 'Oil Change' },
//     { name: 'Tire Replacement' },
//     { name: 'Brake Pads' },
//     { name: 'Chain Replacement' },
//     { name: 'Air Filter' },
//     { name: 'Spark Plug' },
//     { name: 'Battery Replacement' },
//     { name: 'Other (please specify)' }
//   ];



//   const motCenters = ['Center 1', 'Center 2', 'Center 3'];

//   const paymentMethods = ['PayPal', 'Stripe', 'Bank Transfer'];


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Clear errors when user types
//     setErrors((prev) => ({
//       ...prev,
//       [name]: '',
//     }));
//   };

//   const validateStep = (step) => {
//     let stepErrors = {};

//     if (step === 1) {
//       if (!formData.bf_totalGuests) {
//         stepErrors.bf_totalGuests = 'Please select a service';
//       }
//     } else if (step === 2) {
//       if (!formData.bf_date) {
//         stepErrors.bf_date = 'Date is required';
//       }
//       if (!formData.bf_time) {
//         stepErrors.bf_time = 'Time is required';
//       }
//       // Check if at least one payment method is provided
//       if (!formData.bf_creditcard && !formData.bf_banktransfer && !formData.bf_paypal) {
//         stepErrors.payment = 'Please provide at least one payment method';
//       }
//     } else if (step === 3) {
//       if (!formData.bf_fullname) {
//         stepErrors.bf_fullname = 'Name is required';
//       }
//       if (!formData.bf_email) {
//         stepErrors.bf_email = 'Email is required';
//       } else if (!/\S+@\S+\.\S+/.test(formData.bf_email)) {
//         stepErrors.bf_email = 'Email is invalid';
//       }
//     }

//     setErrors(stepErrors);
//     return Object.keys(stepErrors).length === 0;
//   };

//   const handleNext = (nextStep) => {
//     const isValid = validateStep(currentStep);
//     console.log("Validation result:", isValid);
//     if (isValid) {
//       setCurrentStep(nextStep);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateStep(3)) {
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsSubmitted(true);
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   // Rest of your JSX remains exactly the same...
//   // (I'm keeping all the return JSX code exactly as it was in your original)

//   if (isSubmitted) {
//     return (
//       <div className="message--bookingform">
//         <p>Your message was sent successfully. Thanks! We'll be in touch as soon as we can, which is usually like lightning (Unless we're sailing or eating tacos!).</p>
//       </div>
//     );
//   }

//   return (
//     <div className="service--bookincontainer">
//       <form id="Servicebooking-form" onSubmit={handleSubmit}>
//         <div className="servicetab-content">
//           {currentStep === 1 && (
//             <div className="sevicetab-pane">
//               <ul>
//                 <li>
//                   <h4>Book A Mot</h4>
//                   <label>Select A Mot Part</label>
//                   <div className="errorTxt">{errors.bf_totalGuests}</div>
//                   <select
//                     name="bf_totalGuests"
//                     value={formData.bf_totalGuests}
//                     onChange={handleInputChange}
//                   >
//                     <option value="">Select</option>
//                     {selectservice.map((service) => (
//                       <option key={service.name} value={service.name}>
//                         {service.name}
//                       </option>
//                     ))}
//                     <option value="More">Other</option>
//                   </select>
//                 </li>
//                 <li>
//                   <button
//                     type="button"
//                     className="next-btn"
//                     onClick={() => handleNext(2)}
//                   >
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}

//           {currentStep === 2 && (
//             <div className="tab-pane">
//               <ul>
//                 <li>
//                   <label>Select Date</label>
//                   <div className="errorTxt">{errors.bf_date}</div>
//                   <input
//                     type="date"
//                     name="bf_date"
//                     value={formData.bf_date}
//                     onChange={handleInputChange}
//                   />
//                 </li>
//                 <li>
//                   <label>Select Time</label>
//                   <div className="errorTxt">{errors.bf_time}</div>
//                   <select
//                     name="bf_time"
//                     value={formData.bf_time}
//                     onChange={handleInputChange}
//                   >
//                     <option value="">Select</option>
//                     <option value="Morning">Morning 08-12:00am</option>
//                     <option value="Midday">Midday 12:00-16:30pm</option>
//                     <option value="Late afternoon">Late afternoon 16:30-18:00pm</option>
//                   </select>
//                 </li>
//                 <li>
//                   <label>Select Payment Method</label>
//                   <div className="errorTxt">{errors.payment}</div>
//                   <label>Credit Card</label>
//                   <input
//                     name="bf_creditcard"
//                     placeholder="Card ID"
//                     value={formData.bf_creditcard}
//                     onChange={handleInputChange}
//                     className="sevicetab-payment"
//                   />
//                   <label>Bank Transfer</label>
//                   <input
//                     name="bf_banktransfer"
//                     placeholder="Account Number"
//                     value={formData.bf_banktransfer}
//                     onChange={handleInputChange}
//                     className="sevicetab-payment"
//                   />
//                   <label>Paypal</label>
//                   <input
//                     name="bf_paypal"
//                     placeholder="Paypal Email Address"
//                     value={formData.bf_paypal}
//                     onChange={handleInputChange}
//                     className="sevicetab-payment"
//                   />
//                 </li>
//                 <li>
//                   <button
//                     type="button"
//                     className="next-btn"
//                     onClick={() => handleNext(3)}
//                   >
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}

//           {currentStep === 3 && (
//             <div className="tab-pane">
//               <ul>
//                 <li>
//                   <label>Your first and last name</label>
//                   <div className="errorTxt">{errors.bf_fullname}</div>
//                   <input
//                     type="text"
//                     name="bf_fullname"
//                     value={formData.bf_fullname}
//                     onChange={handleInputChange}
//                   />
//                 </li>
//                 <li>
//                   <label>Your email address</label>
//                   <div className="errorTxt">{errors.bf_email}</div>
//                   <input
//                     type="email"
//                     name="bf_email"
//                     value={formData.bf_email}
//                     onChange={handleInputChange}
//                   />
//                 </li>
//                 <li>
//                   <label>Do you have any questions or a message? (Optional)</label>
//                   <textarea
//                     name="bf_message"
//                     value={formData.bf_message}
//                     onChange={handleInputChange}
//                   />
//                 </li>
//                 <li>
//                   <button type="submit" className="submit-btn">
//                     Submit
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };


// export default MotBooking;






import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios

const MotBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bikeRegistrationNumber: '',
    bikeMake: '',
    bikeModel: '',
    engineSize: '',
    motDate: '',
    motCenter: '',
    serviceRequired: '',
    additionalServices: [],
    paymentMethod: '',
    paymentAmount: '',
    paymentDetails: {
      paypal: { paypalEmail: '' },
      stripe: { customerID: '', paymentMethodID: '' },
      bankTransfer: {
        bankName: '',
        accountNumber: '',
        routingNumber: '',
        accountHolderName: ''
      }
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectservice = [
    { name: 'Oil Change' },
    { name: 'Tire Replacement' },
    { name: 'Brake Pads' },
    { name: 'Chain Replacement' },
    { name: 'Air Filter' },
    { name: 'Spark Plug' },
    { name: 'Battery Replacement' },
    { name: 'Other (please specify)' }
  ];

  const motCenters = ['Center 1', 'Center 2', 'Center 3'];

  const paymentMethods = ['PayPal', 'Stripe', 'Bank Transfer'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (name === 'additionalServices') {
      setFormData(prev => ({
        ...prev,
        additionalServices: checked
          ? [...prev.additionalServices, value]
          : prev.additionalServices.filter(service => service !== value)
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  
    // Clear specific error when user types
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };
  const validateStep = (step) => {
    let stepErrors = {};

    if (step === 1) {
      if (!formData.serviceRequired) {
        stepErrors.serviceRequired = 'Please select a service';
      }
    } else if (step === 2) {
      if (!formData.motDate) {
        stepErrors.motDate = 'Date is required';
      }
      if (!formData.motCenter) {
        stepErrors.motCenter = 'MOT Center is required';
      }
      if (!formData.paymentMethod) {
        stepErrors.paymentMethod = 'Payment method is required';
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
        stepErrors.phone = 'Phone number is required';
      }
      if (!formData.bikeRegistrationNumber) {
        stepErrors.bikeRegistrationNumber = 'Bike registration number is required';
      }
      if (!formData.bikeMake) {
        stepErrors.bikeMake = 'Bike make is required';
      }
      if (!formData.bikeModel) {
        stepErrors.bikeModel = 'Bike model is required';
      }
      if (!formData.engineSize) {
        stepErrors.engineSize = 'Engine size is required';
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = (nextStep) => {
    const isValid = validateStep(currentStep);
    if (isValid) {
      setCurrentStep(nextStep);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Calculate payment amount based on service and additional services
      const baseServicePrice = 50; // Base MOT service price
      const additionalServicePrice = 20; // Price per additional service
      const paymentAmount = baseServicePrice + 
        (formData.additionalServices.length * additionalServicePrice);
  
      const submissionData = {
        ...formData,
        paymentAmount,
        paymentDetails: {
          ...(formData.paymentMethod === 'PayPal' ? {
            paypal: { 
              paypalEmail: formData.email 
            }
          } : formData.paymentMethod === 'Stripe' ? {
            stripe: { 
              customerID: '', 
              paymentMethodID: '' 
            }
          } : {
            bankTransfer: {
              bankName: '',
              accountNumber: '',
              routingNumber: '',
              accountHolderName: ''
            }
          })
        }
      };
  
      setIsLoading(true);
      try {
        const response = await axios.post(
          'https://speedbike-backend-api-production.up.railway.app/api/motbookings', 
          submissionData
        );
        
        setIsSubmitted(true);
        console.log('Booking successful:', response.data);
      } catch (error) {
        console.error('Booking failed:', error.response ? error.response.data : error.message);
        alert('Booking failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="message--bookingform">
        <p>Your booking was submitted successfully. Thanks! We'll be in touch soon.</p>
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
                  <h4>Book A Mot</h4>
                  <label>Select A Service</label>
                  <div className="errorTxt">{errors.serviceRequired}</div>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Service</option>
                    {selectservice.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
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
                  <div className="errorTxt">{errors.motDate}</div>
                  <input
                    type="date"
                    name="motDate"
                    value={formData.motDate}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Select MOT Center</label>
                  <div className="errorTxt">{errors.motCenter}</div>
                  <select
                    name="motCenter"
                    value={formData.motCenter}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Center</option>
                    {motCenters.map((center) => (
                      <option key={center} value={center}>
                        {center}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <label>Payment Method</label>
                  <div className="errorTxt">{errors.paymentMethod}</div>
                  {paymentMethods.map((method) => (
                    <div key={method}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={handleInputChange}
                      />
                      <label>{method}</label>
                    </div>
                  ))}
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
                  <label>Email Address</label>
                  <div className="errorTxt">{errors.email}</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Phone Number</label>
                  <div className="errorTxt">{errors.phone}</div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Bike Registration Number</label>
                  <div className="errorTxt">{errors.bikeRegistrationNumber}</div>
                  <input
                    type="text"
                    name="bikeRegistrationNumber"
                    value={formData.bikeRegistrationNumber}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Bike Make</label>
                  <div className="errorTxt">{errors.bikeMake}</div>
                  <input
                    type="text"
                    name="bikeMake"
                    value={formData.bikeMake}
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
                  <label>Engine Size (cc)</label>
                  <div className="errorTxt">{errors.engineSize}</div>
                  <input
                    type="number"
                    name="engineSize"
                    value={formData.engineSize}
                    onChange={handleInputChange}
                  />
                </li>
                <li>
                  <label>Additional Services</label>
                  {['Wheel Alignment', 'Suspension Check', 'Electrical System Check', 'Exhaust System Check'].map((service) => (
                    <div key={service}>
                      <input
                        type="checkbox"
                        name="additionalServices"
                        value={service}
                        checked={formData.additionalServices.includes(service)}
                        onChange={handleInputChange}
                      />
                      <label>{service}</label>
                    </div>
                  ))}
                </li>
                <li>
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

export default MotBooking;








































































