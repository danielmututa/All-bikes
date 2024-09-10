
import React from 'react'
import customeone from "../images/one-person.jpg"
import custometwo from "../images/one-persontwo.jpg"
import customethree from "../images/one-personthree.jpg"

const Services = () => {
  return (
    <div className='services'>

       <h2>Our Customers Thoughts</h2>

    <div className="card--container">

    <div className="card--services">
      <img src={customeone} alt="" />
      <div className="card--service--text">
    <p className='name'>Sabbir Hossain Abir</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi accusamus incidunt saepe consectetur in cumque maxime eius voluptatum, culpa laborum magnam adipisci non eligendi repellat voluptas vero id ullam.</p>
      </div>

  </div>

  <div className="card--services">

<img src={custometwo } alt="" />
  <div className="card--service--text">   
  <p className='name'>Zakaria Bin Moti</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi accusamus incidunt saepe consectetur in cumque maxime eius voluptatum, culpa laborum magnam adipisci non eligendi repellat voluptas vero id ullam.</p>
</div>

  </div>

  <div className="card--services">
  <img src={customethree} alt="" />
  <div className="card--service--text">
  <p  className='name'>John Brian Sira</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi accusamus incidunt saepe consectetur in cumque maxime eius voluptatum, culpa laborum magnam adipisci non eligendi repellat voluptas vero id ullam.</p>
</div>
        
  

  </div>


    </div>

  

    </div>
  )
}

export default Services