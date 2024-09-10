import './Products.css'




const Fture = (props) => {
  



return ( 

  <div className="wrap--feature-cards">

 
    {/* <div className="featre--container">
      <img src={require('../images/' + props.picture)} alt="" />

   <div className="text-overlay">
   <p>{props.description}</p>
   </div>
    </div> */}
 
  {/* <div className="rating">
    <img src={require('../images/' + props.rating)} alt="" />
    
  </div> */}

    <div className="buttons--container">

      <div className="button">
  <button  className='purchase'>{props.name} </button>
  <button className='viewmore' >{props.price}</button>
      </div>
    </div>


    </div>
 );
}
 


export default Fture;