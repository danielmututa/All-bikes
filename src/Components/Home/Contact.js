import React from 'react'
import { useState } from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {

  const [contact] = useState([
    {ticon:faLocationDot, heading:'Address', description:'London Eye London, UK'},
    {ticon:faPhone, heading:'Phone Number', description:'+123-444-8465'},
    {ticon:faEnvelope, heading:'E-Mail', description:'speedbike@gmail.com'},
  ])
  return (
    <div className='contact--container'>
      
      <div className="contact--body">

        <div className="contact--text">
  <h2>Contact Us</h2>
  
        </div>


 <div className="map--form">

 <div className="get--flex">

     

       <div className="get--intouch">

        <h3>Get In Touch</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus minima quos molestias ipsam id quam vero quae velit itaque perferendis dolore aut culpa natus temporibus, dolorem tempora dignissimos illum?</p>

        <div className="A-P-EMAIL">

          { contact.map((item => (

            <div className="get-icons">
              <div className="icon-background">
              <FontAwesomeIcon className='color' icon={item.ticon} />
              </div>
            <div className="get-two">
              <h5>{item.heading}</h5>
              <p>{item.description}</p>
            </div>

          </div>
          )))

          
       }

        </div>
<div className="follow--conatiner">
  <div className='line' ><span ></span></div>
  <h5>Follow Us:</h5>
  <div className="follow-flex">

<div className="icon-background">
<FontAwesomeIcon className='color' icon={faYoutube}/>
</div>

<div className="icon-background">
<FontAwesomeIcon className='color' icon={faLinkedinIn}/>
</div>

<div className="icon-background">
<FontAwesomeIcon className='color' icon={faTiktok}/>
</div>

<div className="icon-background">
<FontAwesomeIcon className='color' icon={faTwitter}/>
</div>

  </div>
</div>

       </div>
      
 
 <div className="form--container">
  
     <h3>Send a Message</h3>
      <form className='contact--form'>

     <input type="text" placeholder='your name' className='form' />
     <input type="text" placeholder='your email' className='form'/>
     <textarea name="message" placeholder='your message' id="" className='form--text'></textarea>
     <button className='form--button'>Send Message</button>

      </form>
      </div>
      </div>
 {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29338872.62541884!2d3.643007049999983!3d-26.150925096132468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4ee1bdddb35%3A0xa5143b9be5134f2f!2sHarare!5e0!3m2!1sen!2szw!4v1726565708836!5m2!1sen!2szw" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map--zoom'></iframe> */}

      </div>
   


      </div>

    </div>
  )
}

export default Contact