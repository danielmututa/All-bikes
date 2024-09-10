import React from 'react'
import DataCards from '../Datafile/Datafile'

const Buttonone = ( {muneItems,filterItems,setAlldata}) => {
  return (
    
    <div className="option">
    {
    muneItems.map(val => (
  <button className='btn'
  onClick={() => filterItems(val)}>
    {val}
  

  </button>
 

    ))
    }

    <button className='btn'  
      onClick={() => setAlldata(DataCards) }> All</button>
    </div>
  )
}

export default Buttonone

