import React from 'react'

const Aboutsection = (props) => {
  return (
    <div  className='aboutsection--container'>
         <img className='allimagesonscroll' src={ require('../images/' + props.img)} alt="" />
        {/* <div className="h"><p>{props.img}</p></div> */}
    </div>
  )
}

export default Aboutsection