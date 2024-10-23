import React, { useState } from 'react'



const Aboutlast = () => {

 const [images] =  useState([

   {dimage: 'yahoo9.jpg', descriptio: 'Future Vision:Questions and answers', heading:'Why are we here?', id:1 },
   {dimage: 'bmw7.webp', descriptio: 'Electricity not coal: the Lausitezer Seenland and the Speedbike', heading:'An act of rethinking',  id:2 },
   {dimage: 'honda14.jpg', descriptio: 'Speedbike takesenvironmental responsibility seriouly', heading:'Sustainability',id:3 }

 ])

  
  return (
    <div className='aboutlast--container'>
      <div className="about--morearticles">
        <h2>More articles</h2>
        <div className="threeimages-atrticles">
        {images.map((hoverimages)=>(
  
         <div className="img--hover" key={hoverimages.id}>
         <img loading="lazy" className='three--images' src={ require('../images/' + hoverimages.dimage) } alt="" />
         <div className="description--container">
          <h5>{hoverimages.heading}</h5>
         <p>{hoverimages.descriptio}</p>
         </div>
        

         </div>
        ))}
        </div>
      </div>

    </div>
  )
}

export default Aboutlast

