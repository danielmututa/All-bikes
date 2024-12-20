

import React, { useState, useEffect } from 'react';
import { FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onSwitchForm, showMessage }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem('clientemail');
    const storedPassword = localStorage.getItem('clientpassword');
    
    if (storedEmail && storedPassword) {
      setFormData({
        email: storedEmail,
        password: storedPassword
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password) {
      showMessage('All fields are mandatory');
      return;
    }

    try {
      const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/register/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        })
      });

      const data = await response.json();

      if (response.ok) {
        // On successful login, navigate and store user details
        localStorage.setItem('clientemail', formData.email);
        localStorage.setItem('clientpassword', formData.password);
        navigate('/Rentabike');
      } else {
        // Show error message if login fails
        showMessage(data.message || 'Login failed, please try again');
      }
    } catch (error) {
      console.error('Error during login:', error);
      showMessage('Error during login, please try again');
    }
  };

  const saveDetails = () => {
    if (!formData.email || !formData.password) {
      showMessage('ALL FIELDS ARE MANDATORY');
      return;
    }

    showMessage(
      <div>
        Remember?{' '}
        <p onClick={() => handleSave()}>YES</p>{' '}
        <p onClick={() => showMessage('')}>NO</p>{' '}
        <p onClick={() => handleErase()}>ERASE</p>
      </div>
    );
  };

  const handleSave = () => {
    localStorage.setItem('clientemail', formData.email);
    localStorage.setItem('clientpassword', formData.password);
    showMessage('DETAILS REMEMBERED');
  };

  const handleErase = () => {
    localStorage.removeItem('clientemail');
    localStorage.removeItem('clientpassword');
    setFormData({ email: '', password: '' });
    showMessage('THROWN TO TRASH');
  };

  return (
    <form onSubmit={handleSubmit} className="login-animate">
      <FaSave title="REMEMBER" onClick={saveDetails} className="login-save-icon" />
      <center>
        <h2>SIGN IN</h2>
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
        <button className="login-btn1" type="submit">SignIn</button>
        <section className='login-section'>
          <span><p className='AlreadyRegistered' href="#">Forgot Password?</p></span>
          <span><p className='AlreadyRegistered' onClick={onSwitchForm}>Don't have an account?</p></span>
        </section>
      </center>
    </form>
  );
}

export default LoginForm;
