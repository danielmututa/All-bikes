// // // // import React from 'react'

// import { useState,  } from "react"
// import Userlogin from "../auth/UserLogin";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import UserLogout from "../auth/Userlogout"


// const Login = (props) => {

//  const [email, setEmail] = useState("");
//  const [password, setPassword] = useState("");
//  const [errorMessage, setErrorMessage] = useState(null)

//  const navigate = useNavigate();

//  const handleBack = () => {
//     navigate(-1);
//   };
 


//  const location = useLocation();

//  const from = location.state?.from?.pathname || "/Rentabike"

// const {error ,login} = Userlogin();

// const handleLogin = async (e) => {
//     e.preventDefault();
//     await login(email,password);
//     if (!error){
// navigate(from, {replace: true});
// setEmail("");
// setPassword("");
// return;
//     }else {
//         setErrorMessage(error)
//     }
// }



// const { logOut} = UserLogout();

//  const handleLogOut = async () =>{
//    await logOut();
 
//    if (!error) {
//      navigate("/");
//    }
//  }



//   return (
//     <div className="all-sign-upform-conatainer" >
//   <div className="mix-toggle--form">

//   <div className="form-sign-backgroundcolor">
//             <div className="formsignin-back">
//             <FontAwesomeIcon   className="arrow-back"  onClick={handleBack} icon={faArrowLeft}/>
//         <p className="createan-account">Login to your account</p>
//         </div>
//         </div>



//     <form  className="sign-upform--container"      onSubmit={handleLogin} >
     
//         <input 
//          className="signup-form-name"
//         type="email"
//          placeholder="email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value) } />

//         <input
//         className="sign-upform-password"
//          type="password" 
//          placeholder="password"
//          value={password} 
//           onChange={(e) => setPassword(e.target.value) }
//          />
//          {error && <p>{errorMessage}</p> } 
//         <button  className="sign-up-button" type="submit" >Login</button>
       
//     </form>

//    <div className="last-form-toggle">
//       <p className="having-no-account">Have no account?</p>
//       <p className="switch--to--form" onClick={props.toggleForm}>Sign up</p>
//       </div>
       
//        <div className="log--out">
//       <p  onClick = {handleLogOut}>Log Out</p>
//        </div>

//     </div>
//     </div>
//   )
// }

// export default Login




// import { useState } from "react";
// import Userlogin from "../auth/UserLogin";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import UserLogout from "../auth/Userlogout";

// const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [showSignupPrompt, setShowSignupPrompt] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/Rentabike";
//   const { error, login } = Userlogin();

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     await login(email, password);
    
//     // Check if error contains "user not found" or similar messages
//     if (error?.includes("user-not-found") || error?.includes("no user")) {
//       setShowSignupPrompt(true);
//       setErrorMessage("Account not found. Please sign up first!");
//     } else if (!error) {
//       navigate(from, { replace: true });
//       setEmail("");
//       setPassword("");
//       setShowSignupPrompt(false);
//     } else {
//       setErrorMessage(error);
//       setShowSignupPrompt(false);
//     }
//   };

//   const handleSignupRedirect = () => {
//     props.toggleForm();
//   };

//   const { logOut } = UserLogout();
  
//   const handleLogOut = async () => {
//     await logOut();
//     if (!error) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="all-sign-upform-conatainer">
//       <div className="mix-toggle--form">
//         <div className="form-sign-backgroundcolor">
//           <div className="formsignin-back">
//             <FontAwesomeIcon
//               className="arrow-back"
//               onClick={handleBack}
//               icon={faArrowLeft}
//             />
//             <p className="createan-account">Login to your account</p>
//           </div>
//         </div>

//         <form className="sign-upform--container" onSubmit={handleLogin}>
//           <input
//             className="signup-form-name"
//             type="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             className="sign-upform-password"
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           {errorMessage && (
//             <div className="error-container">
//               <p className="error-message">{errorMessage}</p>
//               {showSignupPrompt && (
//                 <button
//                   className="signup-prompt-button"
//                   onClick={handleSignupRedirect}
//                   type="button"
//                 >
//                   Click here to Sign Up
//                 </button>
//               )}
//             </div>
//           )}

//           <button className="sign-up-button" type="submit">
//             Login
//           </button>
//         </form>

//         <div className="last-form-toggle">
//           <p className="having-no-account">Have no account?</p>
//           <p className="switch--to--form" onClick={props.toggleForm}>
//             Sign up
//           </p>
//         </div>

//         <div className="log--out">
//           <p onClick={handleLogOut}>Log Out</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;









// import { useState } from "react";
// import Userlogin from "../auth/UserLogin";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import UserLogout from "../auth/Userlogout";

// const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [showSignupPrompt, setShowSignupPrompt] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/Rentabike";
//   const { error, login } = Userlogin();
//   const { logOut } = UserLogout();

//   const handleBack = () => {
//     navigate(-1);
//   };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   await login(email, password);
    
  //   if (error === 'no-account') {
  //     setShowSignupPrompt(true);
  //     setErrorMessage("No account found. Please sign up first!");
  //   } else if (!error) {
  //     navigate(from, { replace: true });
  //     setEmail("");
  //     setPassword("");
  //     setShowSignupPrompt(false);
  //   } else {
  //     setErrorMessage(error);
  //     setShowSignupPrompt(false);
  //   }
  // };



//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     try {
//       const result = await login(email, password);
//       console.log("Login result:", result); // Add for debugging
      
//       if (error === 'no-account') {
//         console.log("No account found"); // Add for debugging
//         // setShowSignupPrompt(true);
//         setErrorMessage("No account found. Please sign up first!");
//         setPreservedEmail(email);
//       setPreservedPassword(password);
//       } else if (!error) {
//         navigate(from, { replace: true });
//         setEmail("");
//         setPassword("");
//         setShowSignupPrompt(false);
//       } else {
//         console.log("Other error:", error); // Add for debugging
//         setErrorMessage(error);
//         setShowSignupPrompt(false);
//       }
//     } catch (err) {
//       console.log("Login error:", err); // Add for debugging
//       setErrorMessage("An error occurred during login");
//       setShowSignupPrompt(false);
//     }
//   };

//   // Add preservedEmail and preservedPassword states
// const [preservedEmail, setPreservedEmail] = useState("");
// const [preservedPassword, setPreservedPassword] = useState("");


//   const handleSignupRedirect = () => {
//     props.toggleForm();
//     props.setSignupEmail(preservedEmail);
//     props.setSignupPassword(preservedPassword);
//   };

//   const handleLogOut = async () => {
//     await logOut();
//     if (!error) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="all-sign-upform-conatainer">
//       <div className="mix-toggle--form">
//         <div className="form-sign-backgroundcolor">
//           <div className="formsignin-back">
//             <FontAwesomeIcon
//               className="arrow-back"
//               onClick={handleBack}
//               icon={faArrowLeft}
//             />
//             <p className="createan-account">Login to your account</p>
//           </div>
//         </div>

//         <form className="sign-upform--container" onSubmit={handleLogin}>
//           <input
//             className="signup-form-name"
//             type="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             className="sign-upform-password"
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           {errorMessage && (
//             <div className="error-container">
//               <p className="error-message">{errorMessage}</p>
//               {showSignupPrompt && (
//                 <button
//                   className="signup-prompt-button"
//                   onClick={handleSignupRedirect}
//                   type="button"
//                 >
//                   Click here to Sign Up
//                 </button>
//               )}
//             </div>
//           )}

//           <button className="sign-up-button" type="submit">
//             Login
//           </button>
//         </form>

//         <div className="last-form-toggle">
//           <p className="having-no-account">Have no account?</p>
//           <p className="switch--to--form" onClick={props.toggleForm}>
//             Sign up
//           </p>
//         </div>

//         <div className="log--out">
//           <p onClick={handleLogOut}>Log Out</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;







// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjddddddddddddddddddddddddddddddddddddddddddddddddddddddddd


// import React, { useState } from "react";
// import Userlogin from "../auth/UserLogin";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import UserLogout from "../auth/Userlogout";

// const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [showSignupPrompt, setShowSignupPrompt] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/Rentabike";
//   const { error, login } = Userlogin();
//   const { logOut } = UserLogout();

//   const handleBack = () => {
//     navigate(-1);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await login(email, password);
//       console.log("Login result:", result);

//       if (error === 'no-account') {
//         console.log("No account found");
//         // setShowSignupPrompt(true);
//         setErrorMessage("No account found. Please sign up first!");
//         setPreservedEmail(email);
//         setPreservedPassword(password);
//       } else if (!error) {
//         navigate(from, { replace: true });
//         setEmail("");
//         setPassword("");
//         setShowSignupPrompt(false);
//       } else {
//         console.log("Other error:", error);
//         setErrorMessage(error);
//         setShowSignupPrompt(false);
//       }
//     } catch (err) {
//       console.log("Login error:", err);
//       setErrorMessage("An error occurred during login");
//       setShowSignupPrompt(false);
//     }
//   };

//   const [preservedEmail, setPreservedEmail] = useState("");
//   const [preservedPassword, setPreservedPassword] = useState("");

//   const handleSignupRedirect = () => {
//     props.toggleForm();
//     props.setSignupEmail(preservedEmail);
//     props.setSignupPassword(preservedPassword);
//   };

//   const handleLogOut = async () => {
//     await logOut();
//     if (!error) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="all-sign-upform-conatainer">
//      <div className="mix-toggle--form">
//        <div className="form-sign-backgroundcolor">
//          <div className="formsignin-back">
//             <FontAwesomeIcon
//               className="arrow-back"
//               onClick={handleBack}
//               icon={faArrowLeft}
//             />
//             <p className="createan-account">Login to your account</p>
//           </div>
//         </div>

//         <form className="sign-upform--container" onSubmit={handleLogin}>
//           <input
//             className="signup-form-name"
//             type="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             className="sign-upform-password"
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//          {errorMessage && (
//             <div className="error-container">
//               <p className="error-message">{errorMessage}</p>
//               {showSignupPrompt && (
//                 <button
//                   className="signup-prompt-button"
//                   onClick={handleSignupRedirect}
//                   type="button"
//                 >
//                   Click here to Sign Up
//                 </button>
//               )}
//             </div>
//           )}

//           <button className="sign-up-button" type="submit">
//             Login
//           </button>
//         </form>

//         <div className="last-form-toggle">
//           <p className="having-no-account">Have no account?</p>
//           <p className="switch--to--form" onClick={props.toggleForm}>
//             Sign up
//           </p>
//         </div>

//         <div className="log--out">
//           <p onClick={handleLogOut}>Log Out</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk






import React, { useState } from "react";
import Userlogin from "../auth/UserLogin";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserLogout from "../auth/Userlogout";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/Rentabike";
  const { error, login } = Userlogin();
  const { logOut } = UserLogout();

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const result = await login(email, password);
      console.log("Login result:", result);

      if (error === 'no-account') {
        console.log("No account found");
        setErrorMessage("No account found. Please sign up first!");
        setPreservedEmail(email);
        setPreservedPassword(password);
      } else if (!error) {
        navigate(from, { replace: true });
        setEmail("");
        setPassword("");
        setShowSignupPrompt(false);
      } else {
        console.log("Other error:", error);
        setErrorMessage(error);
        setShowSignupPrompt(false);
      }
    } catch (err) {
      console.log("Login error:", err);
      setErrorMessage("An error occurred during login");
      setShowSignupPrompt(false);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const [preservedEmail, setPreservedEmail] = useState("");
  const [preservedPassword, setPreservedPassword] = useState("");

  const handleSignupRedirect = () => {
    props.toggleForm();
    props.setSignupEmail(preservedEmail);
  props.setSignupPassword(preservedPassword);
  };

  const handleLogOut = async () => {
    await logOut();
    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className="all-sign-upform-conatainer">
     <div className="mix-toggle--form">
       <div className="form-sign-backgroundcolor">
         <div className="formsignin-back">
            <FontAwesomeIcon
              className="arrow-back"
              onClick={handleBack}
              icon={faArrowLeft}
            />
            <p className="createan-account">Login to your account</p>
          </div>
        </div>

        <form className="sign-upform--container" onSubmit={handleLogin}>
          <input
            className="signup-form-name"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="sign-upform-password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

         {errorMessage && (
            <div className="error-container">
              <p className="error-message">{errorMessage}</p>
              {showSignupPrompt && (
                <button
                  className="signup-prompt-button"
                  onClick={handleSignupRedirect}
                  type="button"
                >
                  Click here to Sign Up
                </button>
              )}
            </div>
          )}

          <button className="sign-up-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="last-form-toggle">
          <p className="having-no-account">Have no account?</p>
          <p className="switch--to--form" onClick={props.toggleForm}>
            Sign up
          </p>
        </div>

        <div className="log--out">
          <p onClick={handleLogOut}>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Login;