import { useNavigate } from "react-router-dom";
// import brgimage from '../images/Banner image.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faHome} from "@fortawesome/free-solid-svg-icons"
// import { faBicycle } from "@fortawesome/free-solid-svg-icons";
// import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
// import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import { useState } from "react";
import vedio from "../videos/5052676-hd_1920_1080_30fps (1).mp4"
// import backgroungimg from "../images/Banner image.png"


import logo from '../images/logo1.png'
// import logo from 
// import Footerlinks from "./Footerlinks";

const Home = () => {

 const [datacard] = useState ([
  {image:'one-person.jpg', name:'Sabbir Hossain Abir', description:"Speedbikes' attention to detail and craftsmanship is impressive. The riding experience is smooth and exhilarating. Highly recommended for cycling enthusiasts!"},
  {image:'one-persontwo.jpg', name:'Zakaria Bin Moti', description:"Impressive customer service at Speedbikes helped me find the perfect bike seamlessly. Expert advice is guaranteed every time. The team's knowledge and support exceeded my expectations. Five-star service!"},
  {image:'one-personthree.jpg', name:'John Brian Sira', description:"The Speedbike offers an amazing ride with smooth handling. Its sleek design makes every outing enjoyable for both casual and serious cyclists. Let me know if you need any further adjustments!"}

 ]);

 const navigate = useNavigate()


//  llllllllllllllllllllllllllllllllll
// const [cardCounts, setCardCounts] = useState([
//   {number:"0", icon:faHome, name:"Branches"},
//   {number:"0", icon:faBicycle, name:"Bikes purchased"},
//   {number:"0", icon:faPeopleGroup, name:" Happy Clares"},
//   {number:"0", icon:faMotorcycle, name:"Available Bikes"},
//   ]);

    // Define target values
  //   const targets = [300, 6000, 390, 4000];

  

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCardCounts(prevCounts =>
  //       prevCounts.map((count, index) => ({
  //         ...count,
  //         number:
  //           parseInt(count.number) < targets[index]
              // ? parseInt(count.number) + 2
  //             : count.number,
  //       }))
  //     );
  //   }, 0.5);

  //   return () => clearInterval(interval);
  // }, );


  // const [hovered, setHovered] = useState(false);
  // const [activeCard, setActiveCard] = useState(null);

  // const cards = [
  //   {
  //     id: 1,
  //     image: 'bmw1.jpg',
  //     title: 'Card 1',
  //     description: 'This is card 1',
  //   },
  //   {
  //     id: 2,
  //     image: 'bmw2.jpg',
  //     title: 'Card 2',
  //     description: 'This is card 2',
  //   },
  //   {
  //     id: 3,
  //     image: 'bmw3.webp',
  //     title: 'Card 3',
  //     description: 'This is card 3',
  //   },
  // ];












// llllllllllllllllllllllllllllllllllllllll




  
  

    return ( 
<div className="home" >



<div className="video">

  <video src={vedio} autoPlay loop  />
  
  <div className="overlaybackground">

  <h1>SpeedBikes For The World</h1>
  <p>Born to Ride, Built for Speed</p>

  <div className="button">
   <button onClick={() =>navigate('oderstock',{replace:true})}>View Bikes</button>
   </div>

  
</div>



<div className="video--text">



{/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
{/* <div className="banner-card-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${hovered && activeCard === index ? 'active' : ''}`}
          onMouseEnter={() => {
            setHovered(true);
            setActiveCard(index);
          }}
          onMouseLeave={() => {
            setHovered(false);
            setActiveCard(null);
          }}
        >
          <div className="card-image-container">
            <img src={require('../images/' + card.image)} alt={card.title} className="card-image" />
          </div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div> */}
{/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}




   </div>



</div>



  {/* <div className="textbackgroung"> */}

    
    
   
  {/* <div className="textbackground">
    <div className="scrolling-text">
        At <span className="red">Speed<span className="blue">bikes</span></span>, we are committed to providing you with the best bike rental experience possible. From the quality of our bikes to our exceptional customer service, we go the extra mile to ensure you have a smooth and enjoyable ride.
    </div>
</div> */}




   
  
   
   
{/*  
 <div className="home-bikes-mtr">

 <div className="button">
   <button onClick={() =>navigate('oderstock',{replace:true})}>Bike Showcase</button>
   </div> */}


  

{/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
{/* <div className="four-all">
           
            {cardCounts.map((count, index) => (
                <div className="first-page" key={index}>
                  
                  <div className="icon--circle">
                  <FontAwesomeIcon  icon={count.icon} className="icon" />
                   </div>

                   <div className="plus-nikes">
                  <p className="more--less">{count.number}+</p>
                  <p>{count.name}</p>
                  </div>

                </div>
            ))}
        </div> */}
{/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}

  {/* </div> */}
{/* 
 </div>
  </div> */}
    
    
    <div className='services'>
    <h2>Our Customers Thoughts</h2>
    <div className="card--container">
      { 
      datacard.map((item =>(

        <div className="card--services">
    <img loading="lazy" className="background-image" src={logo} alt="" />
        <img loading="lazy" src={ require('../images/' + item.image)} alt="" />
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





