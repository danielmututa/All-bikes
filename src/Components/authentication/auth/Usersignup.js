// // import { ProjectAuth } from "../firebase/Firebase";

// // let error = null;


// // const signUp = async (email , password)  => {
// //  error = null;

// //  try{
// //     const res = await ProjectAuth.createUserWithEmailAndPassword (email,password);
   
// //     if (!res) {
// //         throw new Error("Something went wrong");
// //     }

// //  }catch (err) {
// //  error = err.message;
// //  console.log(error)

// //  }
// // }

// // const Usersignup = () =>{
// //     return {error , signUp};
// //     // alert ('you must have an account')
// // };

// // export default Usersignup









// // auth/Usersignup.js
// import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
// import { useState } from "react";

// // Assuming this file manages Firebase logic for signup

// const Usersignup = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const auth = getAuth();

//   // This function checks if the user exists using Firebase's method for checking existing email
//   const userExists = async (email) => {
//     try {
//       const methods = await fetchSignInMethodsForEmail(auth, email);
//       return methods.length > 0; // If methods are found, it means the user exists
//     } catch (error) {
//       console.log("Error checking user:", error);
//       return false;
//     }
//   };

//   // This function handles the signup process
//   const signup = async (email, password) => {
//     setIsLoading(true);
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       throw error; // Rethrow error for handling in the signup component
//     }
//   };

//   return { signup, isLoading, userExists };
// };

// export default Usersignup;
