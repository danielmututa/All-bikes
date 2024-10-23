import React from 'react'
import fisrtimg from "../images/motorbikeworkshop.webp"
import bookimg from  "../images/book-a-service.jpg"
import bikerepair1 from "../images/bikerepair1.jpg"
import Motorhealth from "../images/health-checkbike.webp"
import Recallbike from "../images/recallbike.jpg"
import bikewash from "../images/bikewash.jpg"
import motimg from "../images/motimg.jpg"

const Repairandservices = () => {
  return (
    <div className='repair--container'>
<img loading="lazy" className='repairimg-background' src={fisrtimg } alt="" />
   
   <div className="okandperfect--container">
    <div className="okandperfect">
      <div className="heading">
        <h2>SPEEDBIKEZIM SERVICING</h2>
        <h5>THE DIFFERNCE BETWEEN OK AND PERFECT</h5>
      </div>
      <p>Speedbike Service stands for quality and precision in every detail; whether it's an oil change, an annual check-up or a tyre change. Our Technicians have industry have industry recognised qualifications and use genuine Speedbike Parts, allowing us to offer you the highest stands of workmanship and efficiency</p>
    </div>

  <div className="bookaservice--container">
    <h2>BOOK A SERVICE</h2>

    <div className="bookaservice">

      <div className="bookaservice--book">
          <div className="allthreebooks">
          <h3>Book A Service</h3>
          <p>Find Out More</p>
          <button>Book A Service</button>
          </div>
          <div className="line"><span></span></div>
      </div>
 <img loading="lazy" className='bookimg' src={bookimg} alt="" />

    </div>
  </div>


  <div className="ourpromise--container">
   <h2>OUR PROMISE TO YOU</h2>

<div className="flexourpromises">
<img loading="lazy" className='ourpromiseimg' src={bikerepair1} alt="" />
   <div className="ourpromises">
    <h3>What You Expect</h3>
    <p>Experience transparency and peace of mind at Speedbikezim. We provide comprehensive quotes and utilize advanced video inspections to identify any issues, ensuring you're fully informed before we begin work. Our team keeps you updated throughout the process, and your approval is always required before commencing any repairs. At Speedbikezim, we're dedicated to exceeding your expectations</p>
   </div>

  </div>
   
   <div className="highlyskiledtech">

    <h3>Highly-Skilled Technicians</h3>

    <div className="starttech">
    <p>All work is carried out in accordance with Speedbikezim recommended motorcycle service shedules and warranty conditions. Our Tecnicians are sapecially trained at a purpose-built Training Academy to equip them with the necassary skills and expertise to diagnose, service and repair Speedbikezim motorcycles.</p>
    </div>
    
   </div>

    
   <div className="flexourpromises">
<img loading="lazy" className='ourpromiseimg' src={Motorhealth} alt="" />
   <div className="ourpromises">
    <h3>Complimentary Motorcycle Health</h3>
    <p>We will carry out a free of charge comprehensive Motorcycle health check when your bike is being serviced. The condition of all critical components and safety ralated items are cheacked including brakes, suspension and tyres.</p>
   </div>

  </div>
 
  <div className="highlyskiledtech">

<h3>Alternative Transportation</h3>

<div className="starttech">
<p>We can offer you alternative transport options when your bike is in for a service. Please discuss your requirements when booking a service with your Ratailer</p>
</div>

</div>

<div className="flexourpromises">
<img loading="lazy" className='ourpromiseimg' src={Recallbike} alt="" />
   <div className="ourpromises">
    <h3>Recalls</h3>
    <p>We check every bike for any outstanding factory recalls or campaigns every time your bike is booked in for a service. These will be carrried out free of charge.</p>
    <button className="findoutmorebtn">FIND OUT MORE</button>
   </div>

   

  </div>


  <div className="highlyskiledtech">

<h3>While You Wait</h3>

<div className="starttech">
<p>All Speedbikezim motorcycle Retailers offer complimentary wi-fi and refreshments.</p>
</div>

</div>


<div className="flexourpromises">
<img loading="lazy" className='ourpromiseimg' src={bikewash} alt="" />
   <div className="ourpromises">
    <h3>Bike Wash</h3>
    <p>We will always offfer you a complimentary bike wash after your bike is serviced. You will also find a wide range of Speedbike motorcycle CARE products for sale to help you keep your bike in tip-top condition. </p>
   
   </div>

   

  </div>
  </div>



<div className="mot--container">
  <h2>MOT</h2>
  <div className="mot--flex">
    <img loading="lazy" className='motimg' src={motimg} alt="" />

    <div className="txtmot">

   
    <p className='speedbikeguarantee'>We're here to guarantee your motorbike gets the best care possible.</p>

    <p>No matter whether you are replacing a part or completing an MOT check, our specially trained technicians will do so with precision and expertise. Using only Speedbike Motorcycle approved parts and lubricants, we ensure yor steed is in tip-top condition with all fitted parts receiving a two year warranty to give you extra peace of mind.</p>

    <p className='book-mot'>Book your next MOT at your local Speedbike Centre to make sure it's taken care of by passionate, expert technicians.</p>
    </div>
  </div>

  <div className="whyneedmot">
    <div className="textneedmot">
      <h3>Why do I need an MOT?</h3>

      <p>Your motrcycle needs an MOT test three years after its registration and annually after that. It's required by law to ensure that your motorcycle meets safetry requirements as well as environmental standards, so you can keep driving happy, Come to us and we we'll give you the official VT20 certificate when your motorbike passes its MOT.
         </p>

         <p  className='Textmot'>Use the Speedbike Service Online Booking System to book your MOT quickly and easly.</p>

         <button className='btnmot'>BOOK AN MOT</button>
    </div>
    <img loading="lazy" className='motimg' src={motimg} alt="" />
  </div>
</div>


   </div>
 
         </div>
  )
}

export default Repairandservices