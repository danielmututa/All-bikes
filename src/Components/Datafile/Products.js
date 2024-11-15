// // BookingForm.jsx
// import React, { useState } from 'react';
// import './BookingForm.css';

// const BookingForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     bf_totalGuests: '',
//     bf_date: '',
//     bf_time: '',
//     bf_hours: '',
//     bf_fullname: '',
//     bf_email: '',
//     bf_message: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validateStep = (step) => {
//     let stepErrors = {};
    
//     if (step === 1) {
//       if (!formData.bf_totalGuests) {
//         stepErrors.bf_totalGuests = 'Please select number of guests';
//       }
//     } else if (step === 2) {
//       if (!formData.bf_date) stepErrors.bf_date = 'Date is required';
//       if (!formData.bf_time) stepErrors.bf_time = 'Time is required';
//       if (!formData.bf_hours) stepErrors.bf_hours = 'Hours is required';
//     } else if (step === 3) {
//       if (!formData.bf_fullname) stepErrors.bf_fullname = 'Name is required';
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
//     if (validateStep(currentStep)) {
//       setCurrentStep(nextStep);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateStep(3)) {
//       setIsLoading(true);
//       // Simulate API call
//       setTimeout(() => {
//         setIsSubmitted(true);
//         setIsLoading(false);
//       }, 1000);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <h2>Your message was sent successfully. Thanks! We'll be in touch as soon as we can, which is usually like lightning (Unless we're sailing or eating tacos!).</h2>
//     );
//   }

//   return (
//     <form id="booking-form" onSubmit={handleSubmit}>
//       <div className="tab-content">
//         {currentStep === 1 && (
//           <div className="tab-pane">
//             <ul>
//               <li>
//                 <label>How many guests in your group?</label>
//                 <div className="errorTxt">{errors.bf_totalGuests}</div>
//                 <select 
//                   name="bf_totalGuests"
//                   value={formData.bf_totalGuests}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select</option>
//                   {[...Array(12)].map((_, i) => (
//                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                   ))}
//                   <option value="More">More</option>
//                 </select>
//               </li>
//               <li>
//                 <button 
//                   type="button" 
//                   className="next-btn" 
//                   onClick={() => handleNext(2)}
//                 >
//                   Next
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}

//         {currentStep === 2 && (
//           <div className="tab-pane">
//             <ul>
//               <li>
//                 <label>Which date and time are you looking to book on?</label>
//                 <div className="errorTxt">{errors.bf_date}</div>
//                 <input 
//                   type="date" 
//                   name="bf_date"
//                   value={formData.bf_date}
//                   onChange={handleInputChange}
//                 />
//               </li>
//               <li>
//                 <label>Which time of day?</label>
//                 <div className="errorTxt">{errors.bf_time}</div>
//                 <select 
//                   name="bf_time"
//                   value={formData.bf_time}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select</option>
//                   <option value="Morning">Morning</option>
//                   <option value="Midday">Midday</option>
//                   <option value="Late afternoon, ending with a sunset">
//                     Late afternoon, ending with a sunset
//                   </option>
//                 </select>
//               </li>
//               <li>
//                 <label>How many hours would you like to charter for?</label>
//                 <div className="errorTxt">{errors.bf_hours}</div>
//                 <select 
//                   name="bf_hours"
//                   value={formData.bf_hours}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select</option>
//                   {[3,4,5,6,7,8].map(hour => (
//                     <option key={hour} value={hour}>{hour}</option>
//                   ))}
//                   <option value="Overnight (24 hours)">Overnight (24 hours)</option>
//                 </select>
//               </li>
//               <li>
//                 <button 
//                   type="button" 
//                   className="next-btn" 
//                   onClick={() => handleNext(3)}
//                 >
//                   Next
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}

//         {currentStep === 3 && (
//           <div className="tab-pane">
//             <ul>
//               <li>
//                 <label>What is your first and last name?</label>
//                 <div className="errorTxt">{errors.bf_fullname}</div>
//                 <input 
//                   type="text" 
//                   name="bf_fullname"
//                   value={formData.bf_fullname}
//                   onChange={handleInputChange}
//                 />
//               </li>
//               <li>
//                 <label>Which email address should we send your free estimate to?</label>
//                 <div className="errorTxt">{errors.bf_email}</div>
//                 <input 
//                   type="email" 
//                   name="bf_email"
//                   value={formData.bf_email}
//                   onChange={handleInputChange}
//                 />
//               </li>
//               <li>
//                 <label>Do you have any questions or a message? (Optional)</label>
//                 <textarea 
//                   name="bf_message"
//                   value={formData.bf_message}
//                   onChange={handleInputChange}
//                 />
//               </li>
//               <li>
//                 <button type="submit" className="submit-btn">
//                   Request My Free Estimate
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="progress-wrap">
//         <div className="line-progress-bar">
//           <div className="line"></div>
//           <ul className="checkout-bar">
//             {[1, 2, 3].map((step) => (
//               <li 
//                 key={step}
//                 className={`progressbar-dots ${currentStep >= step ? 'active' : ''}`}
//               >
//                 <span>step {step}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {isLoading && (
//         <div id="loader">
//           <img src="//d2erq0e4xljvr7.cloudfront.net/assets/img/ring.svg" alt="loading" />
//         </div>
//       )}
//     </form>
//   );
// };

// export default BookingForm;




// @import url('https://fonts.googleapis.com/css?family=Merriweather:300|Oswald');






      
// <label>Credit Card</label>
// <div className="errorTxt">{errors.bf_creditcard}</div>
// <input 
//   name="bf_creditcard"
//   placeholder='Card ID'
//   onChange={handleInputChange}
//   className='sevicetab-payment'
// />
 



// <label>Bank Transfer</label>
// <div className="errorTxt">{errors.bf_banktransfer}</div>
// <input 
//   name="bf_banktransfer"
//   placeholder='Account Number'
//   onChange={handleInputChange}
//   className='sevicetab-payment'
// />
 




// <label>Paypal</label>
// <div className="errorTxt">{errors.bf_paypal}</div>
// <input 
//   name="bf_paypal"
//   onChange={handleInputChange}
//  className='sevicetab-payment'
//  placeholder='Paypal Email Address'
// /> */}
 


