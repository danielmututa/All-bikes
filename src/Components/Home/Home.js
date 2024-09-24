import { useNavigate } from "react-router-dom";
import brgimage from '../images/Banner image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import { useState } from "react";
import logo from '../images/logo1.png'
// import logo from 
// import Footerlinks from "./Footerlinks";

const Home = () => {

 const [datacard] = useState ([
  {image:'one-person.jpg', name:'Sabbir Hossain Abir', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi accusamus incidunt saepe consectetur in cumque maxime eius voluptatum, culpa laborum magnam adipisci non eligendi repellat voluptas vero id ullam.'},
  {image:'one-persontwo.jpg', name:'Zakaria Bin Moti', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi accusamus incidunt saepe consectetur in cumque maxime eius voluptatum, culpa laborum magnam adipisci non eligendi repellat voluptas vero id ullam.'},
  {image:'one-personthree.jpg', name:'John Brian Sira', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi accusamus incidunt saepe consectetur in cumque maxime eius voluptatum, culpa laborum magnam adipisci non eligendi repellat voluptas vero id ullam.'}

 ]);



  const navigate = useNavigate()
  

    return ( 
<div className="home" >


<img src={brgimage} alt=""/>

  <div className="textbackgroung">

    
    
   
  <div className="textbackground">
    <div className="scrolling-text">
        At <span className="red">Speed<span className="blue">bikes</span></span>, we are committed to providing you with the best bike rental experience possible. From the quality of our bikes to our exceptional customer service, we go the extra mile to ensure you have a smooth and enjoyable ride.
    </div>
</div>




   
  
   
   
 
 <div className="home-bikes-mtr">

 <div className="button">
   <button onClick={() =>navigate('oderstock',{replace:true})}>Bike Showcase</button>
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
    
    
    <div className='services'>
    <h2>Our Customers Thoughts</h2>
    <div className="card--container">
      { 
      datacard.map((item =>(

        <div className="card--services">
    <img className="background-image" src={logo} alt="" />
        <img src={ require('../images/' + item.image)} alt="" />
        <div className="card--service--text">
      <p className='name'>{item.name}</p>
    <div className="contact-speak"><span></span></div>

      <p>{item.description}</p>
        </div>
  
    </div>

      )))
        
   
}
     </div>
     </div>

    <Contact/>
    

</div>

     );
}
 
export default Home;





