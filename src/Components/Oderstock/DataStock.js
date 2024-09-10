


const Datastcok = (props) => {
    return (

   

        <div className="Card--container">
            <img src={ require('../images/' + props.image)} alt="" />
    
         <div className="text">
            <p className="type">{props.type}</p>
            <p>{props.price}</p>
         </div>
       
       
           
        </div>
      );
}
 
export default Datastcok;