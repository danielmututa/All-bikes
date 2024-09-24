
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn ,faInstagram ,faFacebookF,faTwitter  } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
// import { useState } from 'react'
const Footer = () => {

  // const [fotterdata] = useState ([
  //   {header:'Our Branches',  }
  // ])

    return ( 
   <div className="fotter--container">




<div className="allfourlinks">
     
     <div className="four--links">



    <div className="icon--text">
       <h4>SHOP</h4>

       <div className="iconstext">
     
        <p>All</p>
       </div>

       <div className="iconstext">
     
        <p>BMW</p>
       </div>

       <div className="iconstext">
     
        <p>Honda</p>
       </div>

       <div className="iconstext">
      
        <p>Yahoo</p>
       </div>

    </div>



    <div className="icon--text">
       <h4>ABOUT</h4>

       <div className="iconstext">
     
       <p>Who we are</p>
       </div>

       <div className="iconstext">
     <p>Values</p>
       </div>

    </div>
    


    <div className="icon--text">
       <h4>INFORMATION</h4>

       <div className="iconstext">
      
        <p>Contact us</p>
       </div>

       <div className="iconstext">
      
        <p>Terms of service</p>
       </div>

       <div className="iconstext">
      
        <p>Privacy policy</p>
       </div>

    </div>
    





    <div className="icon--text">
       <h4>STAY UPDATE</h4>

      
     <div className="text--width">
      <p>Be the first to know about events, new content, products or brands at <b>FWilliams</b>. </p> 
     
       </div>

       <div className="subscribe">
     
      <Link to="">Subscribe to our channel</Link>
     
       </div>

       

       <div className="last--tet">
           <p><b>FOLLOW US ON</b> </p>

           <div className="twicons">
      <FontAwesomeIcon icon={faFacebookF}/>
      <FontAwesomeIcon icon={faInstagram}/>
           </div>
       </div>

      
    </div>
    




    </div>
  

     </div>
    












    <div className="footer--background">
    <p> SpeedBike 2024 | FWilliams</p>
    </div>
   </div>

     );
}
 
export default Footer;



