import { useNavigate } from "react-router-dom";
import brgimage from '../images/Banner image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import { useState , useEffect} from "react";

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


//  llllllllllllllllllllllllllllllllll
const [cardCounts, setCardCounts] = useState([
  {number:"0", icon:faHome, name:"Branches"},
  {number:"0", icon:faBicycle, name:"Bikes purchased"},
  {number:"0", icon:faPeopleGroup, name:" Happy Clares"},
  {number:"0", icon:faMotorcycle, name:"Available Bikes"},
  ]);

    // Define target values
    const targets = [300, 6000, 390, 4000];

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCardCounts(prevCounts =>
        prevCounts.map((count, index) => ({
          ...count,
          number:
            parseInt(count.number) < targets[index]
              ? parseInt(count.number) + 2
              : count.number,
        }))
      );
    }, 0.5);

    return () => clearInterval(interval);
  }, );







// llllllllllllllllllllllllllllllllllllllll




  
  

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


  

{/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
<div className="four-all">
           
            {cardCounts.map((count, index) => (
                <div className="first-page" key={index}>
                  
                  <div className="icon--circle">
                  <FontAwesomeIcon icon={count.icon} className="icon" />
                   </div>

                   <div className="plus-nikes">
                  <p className="more--less">{count.number}+</p>
                  <p>{count.name}</p>
                  </div>

                </div>
            ))}
        </div>
{/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}

  {/* </div> */}

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





