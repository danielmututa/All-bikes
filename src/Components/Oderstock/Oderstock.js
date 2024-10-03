

import { useState } from "react";
import Datastcok from "./DataStock";
import DataCards from "../Datafile/Datafile";
import image1 from "../images/imageoo1.webp";
import image2 from "../images/imageoo2.jpg"
import image3 from "../images/imageoo3.jpg"
import image4 from "../images/imageoo4.jpg"
import image5 from "../images/imageoo5.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import login from "../images/bmw4.jpg";


const Oderstock = () => {


  const [items,setItems] = useState(DataCards);
  const [currentindex, setCurrentindex]= useState(0);

  const [parts] = useState([

    {img:"acompresser.png", type:"COMPRESSOR"},
    {img:"acylinder.webp", type:"CYLINDER"},
    {img:"aenginebike.jpg", type:"ENGINE"},
    {img:"ashaft.jpg", type:"CRANE SHAFT"}

  ]);

  const products = [
    
    {image:image1, text:"Experience the thrill of the open road with our Thunderbolt motorbike. This sleek, sporty cruiser combines power and style, featuring a 650cc engine, inverted forks, and a slim, aerodynamic design. Perfect for weekend getaways and city cruising."},
    {image:image2, text:"Take on the toughest trails with our TerraQuest motorbike. Built for off-road enthusiasts, this rugged bike features a 450cc engine, long-travel suspension, and high-ground clearance. Conquer the wilderness with confidence."},
    {image:image3, text:"Navigate urban streets with ease on our City Glide motorbike. Designed for daily commutes, this fuel-efficient bike features a 250cc engine, comfortable seating, and ample storage. Perfect for city dwellers"},
    {image:image4, text:"Embark on epic journeys with our Grand Tourer motorbike. Equipped with a 1000cc engine, plush seating, and spacious luggage compartments, this bike is built for long-distance travel"},
    {image:image5, text:"Step back in time with our Vintage Dream motorbike. Inspired by classic designs, this stylish bike features a 500cc engine, chrome accents, and a relaxed riding position. Perfect for cruising the countryside"},
  ];


  const Events = [
    {title:"Speedbike Weekend Ride",
       eventimage:"dirtbike--o.jpg",  
       date:"20/11/24", 
       time:"10:00AM", 
       location:"Downtown Bike Trail",
        Description:"Join us for a scenic 20-mile ride through the city "},

    {title:"Bike Maintenance Workshop",
      eventimage:"motorbike-workshop.jpg",
        date:"2/12/24", 
        time:"06:00AM",
         location:"Speedbike Headquarters",
          Description:"Learn expert tips on keeping your bike i top condition"}
  ];



 const handleNext = () => {
  setCurrentindex((currentindex + 1)% products.length);
 };

 const handleprev = () => {
  setCurrentindex((currentindex - 1 + products.length)% products.length);
 };



  const filterItem = (name) =>{
  const updatedItems = DataCards.filter((curElem) => {
    return curElem.name === name;
  }) 
  setItems(updatedItems)
  }


   

  const AllData = (items.map(item => {

    return(
      <Datastcok 
        key={item.id}
       price = {item.price}
        image = {item.image}
        type = {item.type}

      
      
       />
          )
      }))
    
  
    
   

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
{
   Events.map((event=>(

    <div className="event--container">
      <div className="eventtitle"><p>{event.title}</p></div>

      <div className="evevt--allcontainer">
      <img className="eventimgo" src={require("../images/" + event.eventimage)} alt="" />
      
      <div className="date-time-decs">
        <div className="date-time">
        <p>{event.location}</p>
        <p>{event.date}  {event.time}</p>
        </div>
     <p className="descriptionevent">{event.Description}</p>
      </div>
      </div>
       

      {/* date:"Friday,November 20th", 
       time:"10:00AM", 
       location:"Downtown Bike Trail",
        Description:"Join us for a scenic 20-mile ride through the city "}, */}


    </div>
   )))
}
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
<h3>Welcome to our Dealership</h3>
<p>Experience the ultimate ride with our high-performance motorbikes, crafted for speed, comfort, and style, offering exceptional features and robust engines. Our expert team provides personalized support and competitive pricing. Unleash your passion for riding with our premium bikes.</p>
  </div>
</div>

<div className="option">
   

   <div className="buttons">
     <div className="btn2"> 

     <div > <button  className="btn" onClick={() => setItems(DataCards)}  >All</button> </div> 
   

       </div> 
       
   

     <div className="btn" >  <button  onClick={() => filterItem('Roadbike')}> Roadbike</button> </div> 
     <div className="btn" >  <button  onClick={() => filterItem('Offroad')}> Offroad</button> </div> 

     <div className="btn" >  <button  onClick={() => filterItem('Thriller')}> Thriller</button> </div> 
     <div className="btn" >  <button onClick={() => filterItem('Dirtbike')}>Dirtbike </button> </div> 
     {/* <div className="btn">  <button } > All </button> </div>  */}
   </div>
   
 </div> 


  

<div className="Stock--container">
  {AllData}
</div>

 </div>

 </div>

 </div>

        


      
    )
       
}


 export default Oderstock
