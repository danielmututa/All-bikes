





// AccountForm.jsx
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';






const stripePromise = loadStripe('your_publishable_key');

const PaymentFields = ({ paymentMethod, formData, handleInputChange }) => {
  
  switch(paymentMethod) {
    case 'card':
      return (
        <div className='cardPaymentFields'>
          <div className='inputGroup'>
            <CardElement   className='cardElement' />
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
            <div className='inputIcon'>
              {/* <FontAwesomeIcon icon={faUniversity} /> */}
            </div>
          </div>
          <div className= 'inputGroup' >
            <input
              type="text"
              placeholder="Account Number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className= 'formInput'
            />
            <div className= 'inputIcon'>
              {/* <FontAwesomeIcon icon={faCreditCard} /> */}
            </div>
          </div>
          <div className= 'inputGroup'>
            <input
              type="text"
              placeholder="Routing Number"
              name="routingNumber"
              value={formData.routingNumber}
              onChange={handleInputChange}
              className='formInput'
            />
            <div className='inputIcon'>
              {/* <FontAwesomeIcon icon={faUniversity} /> */}
            </div>
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
          <div className='inputIcon'>
            {/* <FontAwesomeIcon icon={faCcPaypal} /> */}
          </div>
        </div>
      );

    default:
      return null;
  }
};

const AccountForm = () => {
  const [formData, setFormData] = useState({
    paymentMethod: 'card',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    paypalEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };







  return (


    <div className="payment--allcontainer">

   
    <div className='container--payment'>
      <form>
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
            <label htmlFor="payment-method-card">
              {/* <FontAwesomeIcon icon={faCcVisa} /> */}
              <span>Credit Card</span>
            </label>

            <input
              id="payment-method-bank"
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={formData.paymentMethod === 'bank'}
              onChange={handleInputChange}
            />
            <label htmlFor="payment-method-bank">
              {/* <FontAwesomeIcon icon={faUniversity} /> */}
              <span>Bank Transfer</span>
            </label>

            <input
              id="payment-method-paypal"
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleInputChange}
            />
            <label htmlFor="payment-method-paypal">
              {/* <FontAwesomeIcon icon={faCcPaypal} /> */}
              <span>PayPal</span>
            </label>
          </div>

          <Elements stripe={stripePromise}>
            <PaymentFields 
              paymentMethod={formData.paymentMethod}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </Elements>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          
        >
          Submit Payment
        </button>


      </form>
    </div>
    </div>
  );
};

export default AccountForm;