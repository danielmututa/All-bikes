





// // AccountForm.jsx
// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement } from '@stripe/react-stripe-js';
// import axios from 'axios'





// const stripePromise = loadStripe('your_publishable_key');

// const PaymentFields = ({ paymentMethod, formData, handleInputChange }) => {
  
//   switch(paymentMethod) {
//     case 'card':
//       return (
//         <div className='cardPaymentFields'>
//           <div className='inputGroup'>
//             <CardElement   className='cardElement' />
//             <div className='inputIcon'>
              
//             </div>
//           </div>
//         </div>
//       );

//     case 'bank':
//       return (
//         <div className='bankTransferFields'>
//           <div className='inputGroup'>
//             <input
//               type="text"
//               placeholder="Bank Name"
//               name="bankName"
//               value={formData.bankName}
//               onChange={handleInputChange}
//               className='formInput'
//             />
//             <div className='inputIcon'>
//               {/* <FontAwesomeIcon icon={faUniversity} /> */}
//             </div>
//           </div>
//           <div className= 'inputGroup' >
//             <input
//               type="text"
//               placeholder="Account Number"
//               name="accountNumber"
//               value={formData.accountNumber}
//               onChange={handleInputChange}
//               className= 'formInput'
//             />
//             <div className= 'inputIcon'>
//               {/* <FontAwesomeIcon icon={faCreditCard} /> */}
//             </div>
//           </div>
//           <div className= 'inputGroup'>
//             <input
//               type="text"
//               placeholder="Routing Number"
//               name="routingNumber"
//               value={formData.routingNumber}
//               onChange={handleInputChange}
//               className='formInput'
//             />
//             <div className='inputIcon'>
//               {/* <FontAwesomeIcon icon={faUniversity} /> */}
//             </div>
//           </div>
//         </div>
//       );

//     case 'paypal':
//       return (
//         <div className='inputGroup'>
//           <input
//             type="email"
//             placeholder="PayPal Email Address"
//             name="paypalEmail"
//             value={formData.paypalEmail}
//             onChange={handleInputChange}
//             className='formInput'
//           />
//           <div className='inputIcon'>
//             {/* <FontAwesomeIcon icon={faCcPaypal} /> */}
//           </div>
//         </div>
//       );

//     default:
//       return null;
//   }
// };

// const AccountForm = () => {
//   const [formData, setFormData] = useState({
//     paymentMethod: 'card',
//     bankName: '',
//     accountNumber: '',
//     routingNumber: '',
//     paypalEmail: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };







//   return (


//     <div className="payment--allcontainer">

   
//     <div className='container--payment'>
//       <form>
//         <div className='row'>
//           <h4>Payment Method</h4>
//           <div className='paymentMethods'>
//             <input
//               id="payment-method-card"
//               type="radio"
//               name="paymentMethod"
//               value="card"
//               checked={formData.paymentMethod === 'card'}
//               onChange={handleInputChange}
//             />
//             <label htmlFor="payment-method-card">
//               {/* <FontAwesomeIcon icon={faCcVisa} /> */}
//               <span>Credit Card</span>
//             </label>

//             <input
//               id="payment-method-bank"
//               type="radio"
//               name="paymentMethod"
//               value="bank"
//               checked={formData.paymentMethod === 'bank'}
//               onChange={handleInputChange}
//             />
//             <label htmlFor="payment-method-bank">
//               {/* <FontAwesomeIcon icon={faUniversity} /> */}
//               <span>Bank Transfer</span>
//             </label>

//             <input
//               id="payment-method-paypal"
//               type="radio"
//               name="paymentMethod"
//               value="paypal"
//               checked={formData.paymentMethod === 'paypal'}
//               onChange={handleInputChange}
//             />
//             <label htmlFor="payment-method-paypal">
//               {/* <FontAwesomeIcon icon={faCcPaypal} /> */}
//               <span>PayPal</span>
//             </label>
//           </div>

//           <Elements stripe={stripePromise}>
//             <PaymentFields 
//               paymentMethod={formData.paymentMethod}
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />
//           </Elements>
//         </div>

//         <button 
//           type="submit" 
//           className="submit-button"
          
//         >
//           Submit Payment
//         </button>


//       </form>
//     </div>
//     </div>
//   );
// };

// export default AccountForm;









































  import React, { useState } from 'react';
import axios from 'axios';

const PaymentFields = ({ paymentMethod, formData, handleInputChange }) => {
  switch (paymentMethod) {
    case 'card':
      return (
        <div className='cardPaymentFields'>
          <div className='inputGroup'>
            <input
              type="text"
              placeholder="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className='formInput'
            />
            <div className='inputIcon'>
            </div>
          </div>
          <div className='inputGroup'>
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              className='formInput'
            />
            <div className='inputIcon'>
            </div>
          </div>
          <div className='inputGroup'>
            <input
              type="text"
              placeholder="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className='formInput'
            />
            <div className='inputIcon'>
            </div>
          </div>
          <div className='inputGroup'>
            <input
              type="text"
              placeholder="Card Holder Name"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleInputChange}
              className='formInput'
            />
            <div className='inputIcon'>
            </div>
          </div>
        </div>
      );
    case 'bank':
      return (
        <div className='bankTransferFields'>
          <div className='inputGroup'>
            <input
              type="text"
              placeholder="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              className='formInput'
            />
          </div>
          <div className='inputGroup'>
            <input
              type="text"
              placeholder="Account Number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className='formInput'
            />
          </div>
          <div className='inputGroup'>
            <input
              type="text"
              placeholder="Routing Number"
              name="routingNumber"
              value={formData.routingNumber}
              onChange={handleInputChange}
              className='formInput'
            />
          </div>
        </div>
      );
    case 'paypal':
      return (
        <div className='inputGroup'>
          <input
            type="email"
            placeholder="PayPal Email Address"
            name="paypalEmail"
            value={formData.paypalEmail}
            onChange={handleInputChange}
            className='formInput'
          />
        </div>
      );
    default:
      return null;
  }
};

const AccountForm = () => {
  const [formData, setFormData] = useState({
    paymentMethod: 'card',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    paypalEmail: '',
    amount: '',
    currency: 'USD',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
      userId: "603d9f2d7cbd0e3a51c2f1e1",
      paymentMethod: formData.paymentMethod,
      paymentDetails: {},
      amount: formData.amount,
      currency: formData.currency
    };

    if (formData.paymentMethod === 'card') {
      paymentData.paymentDetails.card = {
        cardNumber: formData.cardNumber,
        expirationDate: formData.expirationDate,
        cvv: formData.cvv,
        cardHolderName: formData.cardHolderName
      };
    } else if (formData.paymentMethod === 'bank') {
      paymentData.paymentDetails.bankTransfer = {
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
        routingNumber: formData.routingNumber
      };
    } else if (formData.paymentMethod === 'paypal') {
      paymentData.paymentDetails.paypal = {
        paypalEmail: formData.paypalEmail
      };
    }

   
  
    
    
    
    
    

    try {
      const response = await axios.post('https://speedbike-backend-api-production.up.railway.app/api/payments', paymentData);
      console.log('Payment successful:', response.data);
      alert('Payment processed successfully!');
    } catch (error) {
      console.error('Payment failed:', error.response?.data || error.message);
      alert('Payment failed: ' + (error.response?.data?.error || 'Unknown error occurred'));
    }
  };

  return (
    <div className="payment--allcontainer">
      <div className='container--payment'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <h4>Payment Method</h4>
            <div className='paymentMethods'>
              <input
                id="payment-method-card"
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleInputChange}
              />
              <label htmlFor="payment-method-card">Credit Card</label>

              <input
                id="payment-method-bank"
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={formData.paymentMethod === 'bank'}
                onChange={handleInputChange}
              />
              <label htmlFor="payment-method-bank">Bank Transfer</label>

              <input
                id="payment-method-paypal"
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleInputChange}
              />
              <label htmlFor="payment-method-paypal">PayPal</label>
            </div>

            <PaymentFields
              paymentMethod={formData.paymentMethod}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>

          <div className='inputGroup'>
            <input
              type="number"
              step="0.01"
              placeholder="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className='formInput'
            />
          </div>

          <button type="submit" className="submit-button">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountForm;











