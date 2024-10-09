// import React from 'react'
import { useNavigate } from "react-router-dom"
import UserLogout from "../auth/Userlogout"
const Dashboard = () => {
const navigate = useNavigate();
const {error, logOut} = UserLogout();

const handleLogOut = async () =>{
  await logOut();

  if (!error) {
    navigate("/");
  }
}

  return (
    <div><h1>welcome to the dashboard</h1>
    <button  onClick = {handleLogOut}>Log Out</button>

    </div>
  )
}

export default Dashboard