import { useNavigate } from "react-router-dom";
import brgimage from '../images/Banner image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import Services from "./Services";
import Contact from "./Contact";
import Footerlinks from "./Footerlinks";

const Home = () => {
  const navigate = useNavigate()
  

    return ( 
<div className="home" >


<img src={brgimage} alt=""/>

  <div className="textbackgroung">

    
    
   

<marquee direction='left' behavior='scroll' scrollamount='6'>
  
  
   <p> At <span className="red">Speed<span className="blue">bikes</span>   </span> , we are committed to providing you with the best bike rental experience possible. From the quality of our bikes to our exceptional customer service, we go the extra mile to ensure you have a smooth and enjoyable ride.</p>
  
</marquee>
      




   
  
   
   
 
 <div className="home-bikes-mtr">

 <div className="button">
   <a href="" onClick={() => navigate('oderstock', {replace:true})}>Bike Showcase</a>
   </div>
<div className="four-all">


  <div className="first-page">
  <div className="icon--circle">
  <FontAwesomeIcon icon={faHome} className="icon" />
    </div>
    <div className="plus-nikes">
    <p className="more--less">150+</p>
    <p>Branches</p>
    </div>
  </div>

  <div className="first-page">
  <div className="icon--circle">
    <FontAwesomeIcon icon={faBicycle}  className="icon"/>
    </div>
    <div className="plus-nikes">
    <p className="more--less">6000+</p>
    <p>Bikes purchased </p>
  </div>
    </div>

  <div className="first-page">
  <div className="icon--circle">
    <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
  </div>
    <div className="plus-nikes">
    <p className="more--less">380+</p>
    <p>Happy Clares</p>
    </div>
  </div>

  <div className="first-page">
<div className="icon--circle">
    
    <FontAwesomeIcon icon={faMotorcycle} className="icon" />
  </div>
    <div className="plus-nikes">
    <p className="more--less">1550+</p>
    <p>Available Bikes</p>
    </div>
  </div>
  </div>

 </div>
  </div>
    
    <Services/>
    <Contact/>
    <Footerlinks/>

</div>

     );
}
 
export default Home;










// import { useState } from 'react';
// import Background from './Background';
// import React from 'react'
// import Navbar from '../Navbar/Navbar';
// import Hero from './Hero';

// const Home = () => {

//   let heroData = [
//     {text1:"Dive into" , text2:"what you love"},
//     {text1:"Indulge" , text2:"your passions"},
//     {text1:"Give in to" , text2:"your passions"},
//   ]

//   const [heroCount, setHereCount] = useState(2);
//   const [playstatus, setPlayStatus] = useState(false)


//   return (
//     <div className="bikenavigate">
      
//     <Background playstatus={playstatus} heroCount={heroCount}/>
//      {/* <Navbar/> */}
//     <Hero
//     setPlayStatus = {setPlayStatus}
//     heroData={heroData}
//     heroCount = {heroCount}
//     setHereCount={setHereCount}
//     playstatus = {playstatus}
//     />
//     </div>
//   )
// }

// export default Home