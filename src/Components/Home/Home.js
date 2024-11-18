import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { useState } from "react";
import vedio from "../videos/5052676-hd_1920_1080_30fps (1).mp4"
import logo from '../images/logo1.png'
const Home = () => {

 const [datacard] = useState ([
  {image:'one-person.jpg', name:'Sabbir Hossain Abir', description:"Impressive attention to detail and craftsmanship make Speedbikes stand out. The riding experience is smooth and exhilarating, making them a fantastic choice for cycling enthusiasts everywhere."},
  {image:'one-persontwo.jpg', name:'Zakaria Bin Moti', description:"Exceptional customer service at Speedbikes helped me find the perfect bike. Their knowledgeable team provided expert advice that exceeded my expectations. Truly a five-star experience every time!"},
  {image:'one-personthree.jpg', name:'John Brian Sira', description:"The Speedbike offers an amazing ride with smooth handling. Its sleek design makes every outing enjoyable for both casual and serious cyclists. Let me know if you need any further adjustments!"}

 ]);

 const navigate = useNavigate()


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




   </div>



</div>


    
    
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





