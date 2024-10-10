import React from 'react'

const Aboutsection = (props) => {
  return (
    <div  className='aboutsection--container'>
         <img loading="lazy" className='allimagesonscroll' src={ require('../images/' + props.img)} alt="" />
        {/* <div className="h"><p>{props.img}</p></div> */}
    </div>
  )
}

export default Aboutsection