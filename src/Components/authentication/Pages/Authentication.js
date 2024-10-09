// import React from 'react'
import Login from "../Login/Login"
import Signup from "../Login/Signup"
import { useState } from "react"
const Authentication = () => {
 const [toggle, setToggle] = useState(true);


 const handleToggle = () => {
    setToggle(!toggle);
  };
  return <div>{ toggle ? (
  
  < Login toggleForm={handleToggle}/>

  ) :(
     <Signup  toggleForm={handleToggle}/>
     )}
     </div>
    
      
      
  
}

export default Authentication