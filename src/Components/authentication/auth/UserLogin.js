// import {ProjectAuth} from "../firebase/Firebase";



// let error = null;

// const login = async (email, password) => {
//   error =null;

//   try {
//     const res = await ProjectAuth.signInWithEmailAndPassword(email,password);
//     error = null;
//     console.log(res.user)
//     return res

//   } catch (err) {

//     error = err.message;
//     console.log(error);
    
//   }

// };


// const Userlogin = () => {
//     return {error , login}
// };

// export default Userlogin







// import { ProjectAuth } from "../firebase/Firebase";

// let error = null;
// let isLoading = false;

// const login = async (email, password) => {
//   isLoading = true;
//   error = null;

//   try {
//     const res = await ProjectAuth.signInWithEmailAndPassword(email, password);
//     error = null;
//     console.log(res.user);
//     isLoading = false;
//     return res;
//   } catch (err) {
//     error = err.message;
//     console.log(error);
//     isLoading = false;
//   }
// };

// const Userlogin = () => {
//   return { error, isLoading, login };
// };

// export default Userlogin;







// import { ProjectAuth } from "../firebase/Firebase";

// let error = null;
// let isLoading = false;

// const login = async (email, password) => {
//   isLoading = true;
//   error = null;

//   try {
//     const res = await ProjectAuth.signInWithEmailAndPassword(email, password);
//     error = null;
//     isLoading = false;
//     return res;
//   } catch (err) {
//     if (err.code === 'auth/invalid-credential') {
//       error = 'no-account';
//     } else {
//       error = err.message;
//     }
//     console.log(error);
//     isLoading = false;
//   }
// };

// const Userlogin = () => {
//   return { error, isLoading, login };
// };

// export default Userlogin;





// UserLogin.js
import { ProjectAuth } from "../firebase/Firebase";

let error = null;
let isLoading = false;

const login = async (email, password) => {
  isLoading = true;
  error = null;

  try {
    const res = await ProjectAuth.signInWithEmailAndPassword(email, password);
    error = null;
    isLoading = false;
    return res;
  } catch (err) {
    console.log("Firebase error code:", err.code); // Add this line for debugging
    
    // Check for all possible "no user" error codes
    if (err.code === 'auth/invalid-credential' || 
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/wrong-password') {
      error = 'no-account';
    } else {
      error = err.message;
    }
    isLoading = false;
  }
};

const Userlogin = () => {
  return { error, isLoading, login };
};

export default Userlogin;