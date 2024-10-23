// import { ProjectAuth } from "../firebase/Firebase";

// let error = null;


// const signUp = async (email , password)  => {
//  error = null;

//  try{
//     const res = await ProjectAuth.createUserWithEmailAndPassword (email,password);
   
//     if (!res) {
//         throw new Error("Something went wrong");
//     }

//  }catch (err) {
//  error = err.message;
//  console.log(error)

//  }
// }

// const Usersignup = () =>{
//     return {error , signUp};
//     // alert ('you must have an account')
// };

// export default Usersignup












import { useState } from 'react';
import { ProjectAuth } from "../firebase/Firebase";

const Usersignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // Input validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await ProjectAuth.createUserWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Failed to create user");
      }
      setIsLoading(false);
      return res; // Return the response for potential use in the component
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setIsLoading(false);
      throw err; // Re-throw the error for handling in the component
    }
  };

  return { error, isLoading, signup };
};

export default Usersignup;

