// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function SignupForm({ onSwitchForm, showMessage }) {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const validateSubmission = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//       showMessage('ALL FIELDS ARE MANDATORY');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       showMessage('PASSWORD MISMATCH');
//       return;
//     }

//     try {
//       const response = await fetch('https://your-backend-api.com/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         showMessage('Account created successfully');
//         navigate('/Rentabike');
//       } else {
//         showMessage(data.message || 'Registration failed, please try again');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       showMessage('Error during registration, please try again');
//     }
//   };

//   return (
//     <form onSubmit={validateSubmission} className="login-animate">
//       <center>
//         <h2>SIGN UP</h2>
//         <input
//           className='login--input-signup'
//           type="text"
//           value={formData.name}
//           onChange={(e) => setFormData({...formData, name: e.target.value})}
//           placeholder="Full name*"
//           required
//         />
        
//         <input
//           className='login--input-signup'
//           type="email"
//           value={formData.email}
//           onChange={(e) => setFormData({...formData, email: e.target.value})}
//           placeholder="Email Address*"
//           required
//         />
//         <input
//           className='login--input-signup'
//           type="password"
//           value={formData.password}
//           onChange={(e) => setFormData({...formData, password: e.target.value})}
//           placeholder="Password*"
//           required
//         />
//         <input
//           className='login--input-signup'
//           type="password"
//           value={formData.confirmPassword}
//           onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
//           placeholder="Confirm Password*"
//           required
//         />
//         <button className="login-btn1" type="submit">SignUp</button>
//         <section>
//           <span><p className='AlreadyRegistered' onClick={onSwitchForm}>Already Registered?</p></span>
//         </section>
//       </center>
//     </form>
//   );
// }

// export default SignupForm;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm({ onSwitchForm, showMessage }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateSubmission = async (e) => {
    e.preventDefault();

    // Frontend validation for empty fields
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      showMessage('ALL FIELDS ARE MANDATORY');
      return;
    }

    // Password confirmation check
    if (formData.password !== formData.confirmPassword) {
      showMessage('PASSWORD MISMATCH');
      return;
    }

    try {
      // Send POST request to backend API
      const response = await fetch('https://speedbike-backend-api-production.up.railway.app/api/register/register', { // Update with your actual backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword, // Include confirmPassword in request
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showMessage('Account created successfully');
        navigate('/Rentabike'); // Redirect on successful registration
      } else {
        showMessage(data.message || 'Registration failed, please try again');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      showMessage('Error during registration, please try again');
    }
  };

  return (
    <form onSubmit={validateSubmission} className="login-animate">
      <center>
        <h2>SIGN UP</h2>
        <input
          className='login--input-signup'
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Full name*"
          required
        />
        <input
          className='login--input-signup'
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email Address*"
          required
        />
        <input
          className='login--input-signup'
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Password*"
          required
        />
        <input
          className='login--input-signup'
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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

