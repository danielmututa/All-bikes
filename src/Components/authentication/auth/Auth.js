import React, { useState } from 'react';
import LoginForm from '../Login/Login';
import SignupForm from '../Login/Signup';
import Popup from '../auth/Popup';


const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const showMessage = (message, duration = 3000) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), duration);
  };

  return (
    <div className="Signup_Form">
      {showLogin ? (
        <LoginForm onSwitchForm={toggleForm} showMessage={showMessage} />
      ) : (
        <SignupForm onSwitchForm={toggleForm} showMessage={showMessage} />
      )}
      <Popup show={showPopup} message={popupMessage} />
      <div className="credits">CREDITS: FWILLIAM'S</div>
    </div>
  );
};

export default Auth;