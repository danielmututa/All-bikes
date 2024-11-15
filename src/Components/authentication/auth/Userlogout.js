// // import { ProjectAuth } from "../firebase/Firebase"

// // let error = null;

// // const logOut = async () =>{
// //   error = null;

// //   try{
// //     await ProjectAuth.signOut();
// //   } catch (err){
// //     error = err.message;
// //   }

// // }

// // const UserLogout = () =>{
// //     return {error , logOut};
// // }

// // export default UserLogout




// // auth/Userlogout.js
// import { getAuth, signOut } from "firebase/auth";

// const UserLogout = () => {
//   const auth = getAuth();

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//       console.log("User logged out");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return { logOut };
// };

// export default UserLogout;


