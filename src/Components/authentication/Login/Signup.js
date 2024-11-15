// // import { useState } from "react";
// // import Usersignup from "../auth/Usersignup";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// // import UserLogout from "../auth/Userlogout";

// // const Signup = (props) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const from = location.state?.from?.pathname || "/Rentabike";

// //   const { error, isLoading, signup } = Usersignup();

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // First sign up the user
// //       await signup(email, password);

// //       // Navigate to the Rentabike page after successful signup
// //       navigate(from, { replace: true });

// //       setEmail("");
// //       setPassword("");
// //     } catch (err) {
// //       console.log("Signup error:", err);
// //     }
// //   };

// //   const { logOut } = UserLogout();

// //   const handleLogOut = async () => {
// //     await logOut();
// //     if (!error) {
// //       navigate("/");
// //     }
// //   };

// //   const handleBack = () => {
// //     navigate(-1);
// //   };

// //   return (
// //     <div className="all-sign-upform-conatainer">
// //       <div className="mix-toggle--form">
// //         <div className="form-sign-backgroundcolor">
// //           <div className="formsignin-back">
// //             <FontAwesomeIcon className="arrow-back" onClick={handleBack} icon={faArrowLeft} />
// //             <p className="createan-account">Create your account</p>
// //           </div>
// //         </div>

// //         <form className="sign-upform--container" onSubmit={handleSignUp}>
// //           <input
// //             className="signup-form-name"
// //             type="email"
// //             placeholder="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             disabled={isLoading}
// //           />
// //           <input
// //             className="sign-upform-password"
// //             type="password"
// //             placeholder="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             disabled={isLoading}
// //           />

// //           {error && <p className="error">{error}</p>}
// //           <button className="sign-up-button" type="submit" disabled={isLoading}>
// //             {isLoading ? 'Loading...' : 'Sign up'}
// //           </button>
// //         </form>

// //         <div className="last-form-toggle">
// //           <p className="having-no-account">Have an account?</p>
// //           <p className="switch--to--form" onClick={props.toggleForm} disabled={isLoading}>
// //             Login
// //           </p>
// //         </div>

// //         <div className="log--out">
// //           <p onClick={handleLogOut}>Log Out</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;












// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Usersignup from "../auth/Usersignup"; // Import Usersignup
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// const Signup = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // To store error messages

//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/Rentabike";

//   const { isLoading, signup, userExists } = Usersignup(); // Destructure signup logic from Usersignup

//   // Signup handler function
//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // Check if the user already exists before signing up
//     const doesUserExist = await userExists(email);
//     if (doesUserExist) {
//       setErrorMessage("This email is already registered. Please log in.");
//       return; // Stop the signup process if user exists
//     }

//     try {
//       // Proceed with signup
//       await signup(email, password);

//       // After successful signup, navigate to Rentabike page
//       navigate(from, { replace: true });

//       // Clear the form
//       setEmail("");
//       setPassword("");
//       setErrorMessage(""); // Clear any previous error messages
//     } catch (err) {
//       setErrorMessage("Signup failed. Please try again later.");
//       console.log("Signup error:", err);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1); // Go back to the previous page
//   };

//   return (
//     <div className="all-sign-upform-conatainer">
//       <div className="mix-toggle--form">
//         <div className="form-sign-backgroundcolor">
//           <div className="formsignin-back">
//             <FontAwesomeIcon className="arrow-back" onClick={handleBack} icon={faArrowLeft} />
//             <p className="createan-account">Create your account</p>
//           </div>
//         </div>

//         <form className="sign-upform--container" onSubmit={handleSignUp}>
//           <input
//             className="signup-form-name"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={isLoading}
//             required
//           />
//           <input
//             className="sign-upform-password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             disabled={isLoading}
//             required
//           />

//           {errorMessage && <p className="error">{errorMessage}</p>}
//           <button className="sign-up-button" type="submit" disabled={isLoading}>
//             {isLoading ? 'Loading...' : 'Sign up'}
//           </button>
//         </form>

//         <div className="last-form-toggle">
//           <p className="having-no-account">Have an account?</p>
//           <p className="switch--to--form" onClick={props.toggleForm} disabled={isLoading}>
//             Login
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;





































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
          <span><a onClick={onSwitchForm}>Already Registered?</a></span>
        </section>
      </center>
    </form>
  );
}

export default SignupForm;