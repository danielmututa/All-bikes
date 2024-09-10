import React from 'react'




const Contact = () => {
  return (
    <div className='contact--container'>
      
      <div className="contact--body">

        <div className="contact--text">
  <h2>Contact Us</h2>
    <h3>Get In Touch</h3>
        </div>




      <form className='contact--form'>

     <input type="text" placeholder='your name' className='form' />
     <input type="text" placeholder='your email' className='form'/>
     <input type="text" placeholder='your phone'className='form' />
     <textarea name="message" placeholder='your message' id="" className='form--text'></textarea>
     <button className='form--button'>Send Message</button>

      </form>

   


      </div>

    </div>
  )
}

export default Contact