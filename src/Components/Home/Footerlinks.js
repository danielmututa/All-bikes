import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn ,faInstagram ,faFacebookF,faTwitter  } from '@fortawesome/free-brands-svg-icons'

const Footerlinks = () => {




  return (
    <div className='fotter--container'>
      
      <div className="allfourlinks">
     
      <div className="four--links">



     <div className="icon--text">
        <h4>Our Branches</h4>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Harare</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Bulawayo</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Chivhu</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Chipinge</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Ruva</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Masvingo</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Kwekwe</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Bindura</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Kadoma</p>
        </div>
     </div>



     <div className="icon--text">
        <h4>Quick Links</h4>

        <div className="iconstext">
       <FontAwesomeIcon icon={faArrowRight}/>
         <Link to="/">Income</Link>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faArrowRight}/>
         <Link to="/">Reviews</Link>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faArrowRight}/>
         <Link to="/">Featured</Link>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faArrowRight}/>
         <Link to="/">Services</Link>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faArrowRight}/>
         <Link to="/">Contact</Link>
        </div>


     </div>
     


     <div className="icon--text">
        <h4>Contact Information</h4>

        <div className="iconstext">
       <FontAwesomeIcon icon={faPhone}/>
         <p>+263-776896445</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faPhone}/>
         <p>+263-77778907</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faEnvelope}/>
         <p>mututadaniel54@gmail.com</p>
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLocationDot}/>
         <p>Chipinge</p>
        </div>

       

       

        
     </div>
     





     <div className="icon--text">
        <h4>Conatact Info</h4>

        <div className="iconstext">
       <FontAwesomeIcon icon={faTwitter}/>
       <p>Twitter</p> 
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faLinkedinIn}/>
       <p>Linkedin</p>
      
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faInstagram}/>
       <p>Instagram</p>  
        </div>

        <div className="iconstext">
       <FontAwesomeIcon icon={faFacebookF}/>
            <p>Facebook</p>
        </div>

       
     </div>
     




     </div>
   

      </div>
     


    </div>
  )
}

export default Footerlinks