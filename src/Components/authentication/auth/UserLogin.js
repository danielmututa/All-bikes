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







import { ProjectAuth } from "../firebase/Firebase";

let error = null;
let isLoading = false;

const login = async (email, password) => {
  isLoading = true;
  error = null;

  try {
    const res = await ProjectAuth.signInWithEmailAndPassword(email, password);
    error = null;
    console.log(res.user);
    isLoading = false;
    return res;
  } catch (err) {
    error = err.message;
    console.log(error);
    isLoading = false;
  }
};

const Userlogin = () => {
  return { error, isLoading, login };
};

export default Userlogin;