
// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { Link } from 'react-router-dom'

// // import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faInstagram ,faFacebookF } from '@fortawesome/free-brands-svg-icons'
// import './Footer.css'
// // import { useState } from 'react'
// const Footer = () => {

//   // const [fotterdata] = useState ([
//   //   {header:'Our Branches',  }
//   // ])

//     return ( 
//    <div className="fotter--container">




// <div className="allfourlinks">
     
    



//     <div className="icon--text">
//        <h4>SHOP</h4>

//        <div className="iconstext">
     
//         <p>All</p>
//        </div>

//        <div className="iconstext">
     
//         <p>BMW</p>
//        </div>

//        <div className="iconstext">
     
//         <p>Honda</p>
//        </div>

//        <div className="iconstext">
      
//         <p>Yahoo</p>
//        </div>

//     </div>



//     <div className="icon--text">
//        <h4>ABOUT</h4>

//        <div className="iconstext">
     
//        <p>Who we are</p>
//        </div>

//        <div className="iconstext">
//      <p>Values</p>
//        </div>

//     </div>
    


//     <div className="icon--text">
//        <h4>INFORMATION</h4>

//        <div className="iconstext">
      
//         <p>Contact us</p>
//        </div>

//        <div className="iconstext">
      
//         <p>Terms of service</p>
//        </div>

//        <div className="iconstext">
      
//         <p>Privacy policy</p>
//        </div>

//     </div>
    





//     <div className="icon--text">
//        <h4>STAY UPDATE</h4>

      
//      <div className="text--width">
//       <p>Be the first to know about events, new content, products or brands at <b>FWilliams</b>. </p> 
     
//        </div>

//        <div className="subscribe">
     
//       <Link to="">Subscribe to our channel</Link>
     
//        </div>

       

//        <div className="last--tet">
//            <p><b>FOLLOW US ON</b> </p>

//            <div className="twicons">
//       <FontAwesomeIcon icon={faFacebookF}/>
//       <FontAwesomeIcon icon={faInstagram}/>
//            </div>
//        </div>

      
//     </div>
    




   
  

//      </div>
    












//     <div className="footer--background">
//     <p> SpeedBike 2024 | FWilliams</p>
//     </div>
//    </div>

//      );
// }
 
// export default Footer;
























 import React from 'react';
 import '../Footer/Footer.css'; 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
 import { faPhone } from '@fortawesome/free-solid-svg-icons';
 import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 import imglogo from "../images/logo1.png"
 import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

 // Ensure you save the CSS into this fil
 const Footer = () => {
     return (
         <footer className="footer-section">
             <div className="footer-container">
                 {/* Footer CTA Section */}
                 <div className="footer-cta pt-5 pb-5">
                     <div className="footer-row">
                         <div className="footer--t-icn">
                             <div className="single-cta">
                                <div className="footer--circle"><FontAwesomeIcon className='footer-icon' icon={faLocationDot} /></div> 
                                 <div className="cta-text">
                                     <h4>Find us</h4>
                                     <span>1010 Avenue, sw 54321, Chandigarh</span>
                                 </div>
                             </div>
                         </div>
                         <div className="footer--t-icn">
                             <div className="single-cta">
                             <div className="footer--circle"><FontAwesomeIcon className='footer-icon' icon={faPhone} /></div>    
                                 <div className="cta-text">
                                     <h4>Call us</h4>
                                     <span>+263-775306263</span>
                                 </div>
                             </div>
                         </div>
                         <div className="footer--t-icn">
                             <div className="single-cta">
                             <div className="footer--circle"> <FontAwesomeIcon className='footer-icon' icon={faEnvelope} /></div>   
                                 <div className="cta-text">
                                     <h4>Mail us</h4>
                                     <span>speedbikes@gmail.com</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 {/* Footer Content Section */}
                 <div className="footer-content pt-5 pb-5">
                     <div className="footer-row">
                         {/* Footer Widget 1 */}
                         <div className="footer-flex-fullmd">
                             <div className="footer-widget">
                                 <div className="footer-logo">
                                    
                                         <img src={imglogo} className="img-fluid" alt="logo" />
                                    
                                 </div>
                                 <div className="footer-text">
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                 </div>

                                 <div className="footer-social-icon">
                                     <h4>Follow us</h4>

                    <div className="footer--icon-container">                                   
                   <div className="footer--circle-icon"> <FontAwesomeIcon className='footer--btm-icons' icon={faFacebookF} /></div>        
                   <div className="footer--circle-icon"> <FontAwesomeIcon className='footer--btm-icons' icon={faInstagram} /></div>    
                   <div className="footer--circle-icon"><FontAwesomeIcon className='footer--btm-icons' icon={faLinkedinIn} /> </div>     
                   <div className="footer--circle-icon"> <FontAwesomeIcon className='footer--btm-icons' icon={faTwitter} /> </div>     
                   </div>

                                 </div>

                             </div>
                         </div>
                         {/* Footer Widget 2 */}
                         <div className="footer-flex-stpt">
                             <div className="footer-widget">
                                 <div className="footer-widget-heading">
                                     <h4>Useful Links</h4>
                                 </div>
                                     <p className='footer--useful-links'> Home </p>
                                     <p className='footer--useful-links'> About </p>
                                     <p className='footer--useful-links'> Events </p>
                                     <p className='footer--useful-links'> Services </p>
                                     <p className='footer--useful-links'> Contact </p>
                             </div>
                         </div>
                         {/* Footer Widget 3 */}
                         <div className="footer-flex-stpt">
                             <div className="footer-widget">
                                 <div className="footer-widget-heading">
                                     <h4>Subscribe</h4>
                                 </div>
                                 <div className="footer-text mb-25">
                                     <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                 </div>
                                 <div className="subscribe-form">
                                     <form action="#">
                                         <input type="text" placeholder="Email Address" />
                                         <button><i className="fab fa-telegram-plane"></i></button>
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             {/* Copyright Section */}
             <div className="copyright-area">
                
                     
                         <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                             <div className="copyright-text">
                                 <p>Copyright &copy; 2024, All Rights Reserved <span className="footerallright">Fwilliam's</span> </p>
                             </div>
                         </div>
                         <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                             <div className="footer-menu">
                                 
                                     <p> Home </p>
                                     <p> Terms</p>
                                     <p> Privacy</p>
                                     <p> Policy</p>
                                     <p> Contact</p>
                                
                             </div>
                         </div>
                     </div>
             
            
         </footer>
     );
 }
 export default Footer





