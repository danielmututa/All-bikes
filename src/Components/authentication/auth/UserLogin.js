

// // // auth/Userlogin.js
// // import { getAuth, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

// // const Userlogin = () => {
// //   const auth = getAuth();

// //   const userExists = async (email) => {
// //     try {
// //       const methods = await fetchSignInMethodsForEmail(auth, email);
// //       return methods.length > 0; // User exists if methods are found
// //     } catch (error) {
// //       console.error("Error checking user:", error);
// //       return false;
// //     }
// //   };

// //   const login = async (email, password) => {
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       return userCredential.user;
// //     } catch (error) {
// //       console.error("Login failed:", error);
// //       return null;
// //     }
// //   };

// //   return { userExists, login };
// // };

// // export default Userlogin;


// import { getAuth, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

// const Userlogin = () => {
//     const auth = getAuth();

//     // Check if user exists by email
//     const userExists = async (email) => {
//       try {
//         const methods = await fetchSignInMethodsForEmail(auth, email);
//         return methods.length > 0; // User exists if methods are found
//       } catch (error) {
//         console.log("Error checking user:", error);
//         return false;
//       }
//     };

//     // Login with email and password
//     // const login = async (email, password) => {
//     //     try {
//     //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     //         console.log("Login successful:", userCredential.user); // Log user details on successful login
//     //         return userCredential.user;
//     //     } catch (error) {
//     //         console.error("Login failed:", error.message); // Log detailed error message
//     //         return null; // Return null on failure
//     //     }
//     // };



//     const login = async (email, password) => {
   

//       const signup = async (email, password) => {
//         setIsLoading(true);
//         try {
//           const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//           console.log("Signup successful:", userCredential.user);
//           setIsLoading(false);
//         } catch (error) {
//           console.error("Signup error:", error);
//           setIsLoading(false);
//           throw error;
//         }
//       };



//     return { userExists, login };
// };

// export default Userlogin;






