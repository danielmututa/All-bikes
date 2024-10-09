import { ProjectAuth } from "../firebase/Firebase"

let error = null;

const logOut = async () =>{
  error = null;

  try{
    await ProjectAuth.signOut();
  } catch (err){
    error = err.message;
  }

}

const UserLogout = () =>{
    return {error , logOut};
}

export default UserLogout






