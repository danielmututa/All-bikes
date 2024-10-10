
import { useState } from "react";
import Usersignup from "../auth/Usersignup";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UserLogout from "../auth/Userlogout"
const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const { error, isLoading, signup } = Usersignup();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);
      // If successful (no error thrown), proceed with navigation
      navigate(from, { replace: true });
      setEmail("");
      setPassword("");
    } catch (err) {
      // Error handling is done in the hook, no need to do anything here
      // as the error state will be updated automatically
    }
  };



  const { logOut} = UserLogout();

 const handleLogOut = async () =>{
   await logOut();
 
   if (!error) {
     navigate("/");
   }
 }



 const handleBack = () => {
    navigate(-1);
  };
 



  return (
    <div className="all-sign-upform-conatainer">
        <div className="mix-toggle--form">

        <div className="form-sign-backgroundcolor">
            <div className="formsignin-back">
            <FontAwesomeIcon className="arrow-back" onClick={handleBack} icon={faArrowLeft}/>
        <p className="createan-account">Create your account</p>
        </div>
        </div>

      <form className="sign-upform--container" onSubmit={handleSignUp}>

        {/* <div className="form-sign-backgroundcolor">
            <h3>create an account</h3>
        <h2>Create your account</h2>
        </div> */}

        <input
        className="signup-form-name"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        
        <input
        className="sign-upform-password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />

        {error && <p className="error">{error}</p>}
        <button className="sign-up-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Sign up'}
        </button>
      </form>

      <div className="last-form-toggle">
      <p className="having-no-account">Have an account?</p>
      <p className="switch--to--form" onClick={props.toggleForm} disabled={isLoading}>Login</p>
      </div>

      <div className="log--out">
      <p  onClick = {handleLogOut}>Log Out</p>
       </div>

    </div>
    </div>
  );
};

export default Signup;