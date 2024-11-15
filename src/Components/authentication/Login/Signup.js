











// src/components/Signup/SignupForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignupForm({ onSwitchForm, showMessage }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateSubmission = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.mobile) {
      showMessage('ALL FIELDS ARE MANDATORY');
      return;
    }

    const emailRegex = /(gmail|hotmail|yahoo|outlook)/;
    if (!emailRegex.test(formData.email.toLowerCase())) {
      showMessage('EMAIL NOT ALLOWED');
      return;
    }

    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!passwordRegex.test(formData.password)) {
      showMessage('>5 CHARACTERS');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showMessage('PASSWORD MISMATCH');
      return;
    }

    navigate('/Rentabike');
  };

  return (
    <form onSubmit={validateSubmission} className="login-animate">
      <center>
        <h2>SIGN UP</h2>
        <input
          className='login--input-signup'
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          placeholder="Full name*"
          required
        />
        <input
          className='login--input-signup'
          type="tel"
          value={formData.mobile}
          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          placeholder="Contact no*"
          required
        />
        <input
          className='login--input-signup'
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="Email Address*"
          required
        />
        <input
          className='login--input-signup'
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          placeholder="Password*"
          required
        />
        <input
          className='login--input-signup'
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          placeholder="Confirm Password*"
          required
        />
        <button className="login-btn1" type="submit">SignUp</button>
        <section>
          <span><p className='AlreadyRegistered' onClick={onSwitchForm}>Already Registered?</p></span>
        </section>
      </center>
    </form>
  );
}

export default SignupForm;