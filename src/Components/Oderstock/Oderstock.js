

import { useState } from "react";
// import Datastcok from "./DataStock";
import image1 from "../images/imageoo1.webp";
import image2 from "../images/imageoo2.jpg"
import image3 from "../images/imageoo3.jpg"
import image4 from "../images/imageoo4.jpg"
import image5 from "../images/imageoo5.jpg"
import filtr1 from "../images/filterbikeoneroad.webp"
import offroad from "../images/why_we_race_hero.jpg"
import threeler from "../images/bmw2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import login from "../images/bmw4.jpg";


const Oderstock = () => {


 
  const [currentindex, setCurrentindex]= useState(0);

  const [parts] = useState([

    {img:"honda8.webp", type:"HONDA"},
    {img:"yohoo8.jpg", type:"YAHOO"},
    {img:"bmw7.webp", type:"BMW"},
    {img:"roadbike-two.webp", type:"YAHOO"}

  ]);

  const products = [
    
    {image:image1, text:"Experience the thrill of the open road with our Thunderbolt motorbike. This sleek, sporty cruiser combines power and style, featuring a 650cc engine, inverted forks, and a slim, aerodynamic design. Perfect for weekend getaways and city cruising."},
    {image:image2, text:"Take on the toughest trails with our TerraQuest motorbike. Built for off-road enthusiasts, this rugged bike features a 450cc engine, long-travel suspension, and high-ground clearance. Conquer the wilderness with confidence."},
    {image:image3, text:"Navigate urban streets with ease on our City Glide motorbike. Designed for daily commutes, this fuel-efficient bike features a 250cc engine, comfortable seating, and ample storage. Perfect for city dwellers"},
    {image:image4, text:"Embark on epic journeys with our Grand Tourer motorbike. Equipped with a 1000cc engine, plush seating, and spacious luggage compartments, this bike is built for long-distance travel"},
    {image:image5, text:"Step back in time with our Vintage Dream motorbike. Inspired by classic designs, this stylish bike features a 500cc engine, chrome accents, and a relaxed riding position. Perfect for cruising the countryside"},
  ];

  const showcasebikes = [
    {img:"yohoo8.jpg", type:"YAHOO" , motivation:"Ride with passion, live with purpose" },
    {img:"bmw3.webp", type:"BMW" , motivation:"Freedom found on two wheels" },
    {img:"honda11.png", type:"HONDA" , motivation:"Ride with friends, make memories" },
    {img:"yahoo5.webp", type:"YAHOO" , motivation:"Ride fit, live strong" },
    {img:"bmw6.jpg", type:"BMW" , motivation:"Conquer roads, conquer fears" },
    {img:"honda14.jpg", type:"HONDA" , motivation:"Wheels of joy" },
  ]

  const Events = [
    {title:"Speedbike Weekend Ride",
       eventimage:"dirtbike--o.jpg", 
       view:"view" 
    },
      
    

    {title:"Bike Maintenance Workshop",
      eventimage:"motorbike-workshop.jpg",
         view:"view"
    },
  ];



 const handleNext = () => {
  setCurrentindex((currentindex + 1)% products.length);
 };

 const handleprev = () => {
  setCurrentindex((currentindex - 1 + products.length)% products.length);
 };





    return(

<div className="partsavlibleandmotorbikes">

<div className="partsavilable--container">

  {
   parts.map((item) => (
    <div className="partsavilable">
      <img className="partsimgs" src={require("../images/" + item.img)} alt="" />
      <div className="overlay--images">
        <p>{item.type}</p>
      </div>
    </div>
   ))
  }

</div>


      <div className="stock">

<div className="jjjj">






<div className="upcomingevents">
<div className="eventheading">
    <p>Events</p>
  </div>
{
   Events.map((event=>(

    <div className="event--container">
 
      <div className="evevt--allcontainer">
      <img className="eventimgo" src={require("../images/" + event.eventimage)} alt="" />
      
      <div className="date-time-decs">

        <div className="clickevent">
          <div className="widthevent">
        <p>{event.title}</p>
        <p>{event.view}</p>
          </div>
        </div>

      </div>
      </div>
       

     


    </div>
   )))
}
</div>



<div className="option">
   

   <div className="buttons">
     <div className="btn2"> 

     <div > <button  className="btn"  >All</button> </div> 
   

       </div> 
       
   

       <div className="right-two" > 
        <img className="filterimgs" src={filtr1} alt="" />

    <p >Find your perfect ride with precision filtering. Browse road bikes by type,brand,size, and features</p>
     </div>  

     <div className="right-two"> 
     <img className="filterimgs" src={offroad} alt="" />

     <p >Conquer rugged terrain with  precision filtering. Browse off-road bikes by 4-stroke/2-stroke, wheel size and ground clearance</p>
   
     </div> 

     <div className="right-two">
     <img className="filterimgs" src={ threeler} alt="" />

     
     <p >Experience adrenaline-fueled rides with expert filtering.Find thriller bikes by horsepower, torque, and design</p>
    
     </div> 

     
    
   </div>
   
 </div> 









  <div className="login--oderstock">
  <img className="loginimg" src={login} alt="" />
    <div className="oderlogin">
    <p>LOGIN</p>
    </div>
  </div>
</div>



<div className="filter--container">

<div className="carousel--imagedelear">

<div className="selector--image">

 <img className="nextprevimg" src={products[currentindex].image} alt={products[currentindex].text} />
 <div className="position--background">
  <p>{products[currentindex].text}</p>
 </div>
  <div className="buttonnext--prev">
  <FontAwesomeIcon onClick={handleprev} icon={faLessThan} />
  <FontAwesomeIcon onClick={handleNext} icon={faGreaterThan}/>
</div>

</div>


  <div className="welcome--delear">
<h3>Our Bike Models</h3>
<p>Explore our diverse range of motorbikes, from sleek sports bikes to comfortable cruisers, each offering a unique riding experience. Our collection showcases the perfect blend of style, performance, and innovation, ensuring there's a bike to suit every rider's preference.</p>
  </div>
</div>



  

<div className="Stock--container">
{/* showcasebikes */}
{
  showcasebikes.map((show =>(

<div className="Card--container">
         
         <img src={ require('../images/' + show.img)} alt="" />
 
      <div className="text">
         <p className="type">{show.type}</p>
         <p>{show.motivation}</p>
      </div>
    
 
        
     </div>


  )))
  

}


  {/* {AllData} */}
</div>

 </div>

 </div>

 </div>

        


      
    )
       
}


 export default Oderstock
