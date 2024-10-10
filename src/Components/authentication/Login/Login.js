// // import React from 'react'

import { useState,  } from "react"
import Userlogin from "../auth/UserLogin";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserLogout from "../auth/Userlogout"


const Login = (props) => {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState(null)

 const navigate = useNavigate();

 const handleBack = () => {
    navigate(-1);
  };
 


 const location = useLocation();

 const from = location.state?.from?.pathname || "/dashboard"

const {error ,login} = Userlogin();

const handleLogin = async (e) => {
    e.preventDefault();
    await login(email,password);
    if (!error){
navigate(from, {replace: true});
setEmail("");
setPassword("");
return;
    }else {
        setErrorMessage(error)
    }
}



const { logOut} = UserLogout();

 const handleLogOut = async () =>{
   await logOut();
 
   if (!error) {
     navigate("/");
   }
 }



  return (
    <div className="all-sign-upform-conatainer" >
  <div className="mix-toggle--form">

  <div className="form-sign-backgroundcolor">
            <div className="formsignin-back">
            <FontAwesomeIcon   className="arrow-back"  onClick={handleBack} icon={faArrowLeft}/>
        <p className="createan-account">Login to your account</p>
        </div>
        </div>



    <form  className="sign-upform--container"      onSubmit={handleLogin} >
     
        <input 
         className="signup-form-name"
        type="email"
         placeholder="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value) } />

        <input
        className="sign-upform-password"
         type="password" 
         placeholder="password"
         value={password} 
          onChange={(e) => setPassword(e.target.value) }
         />
         {error && <p>{errorMessage}</p> } 
        <button  className="sign-up-button" type="submit" >Login</button>
       
    </form>

   <div className="last-form-toggle">
      <p className="having-no-account">Have no account?</p>
      <p className="switch--to--form" onClick={props.toggleForm}>Sign up</p>
      </div>
       
       <div className="log--out">
      <p  onClick = {handleLogOut}>Log Out</p>
       </div>

    </div>
    </div>
  )
}

export default Login





















