

import { useState } from "react";
import Datastcok from "./DataStock";
import DataCards from "../Datafile/Datafile";
// import Databuttons from "./Databuttons";

// import { useNavigate } from "react-router-dom";








const Oderstock = () => {


  // const [ item,setItems] = useState(DataCards)
  // const muneItems = [...new Set(DataCards.map((item) => item.name))]
  // //   // const navigate = useNavigate()

  //   const filterItems = (cat) => {
  //          const newItems = DataCards.filter((newval) => newval.name === cat)
  //          setItems(newItems)
  //        }

  const [items,setItems] = useState(DataCards)
  const filterItem = (name) =>{
  const updatedItems = DataCards.filter((curElem) => {
    return curElem.name === name;
  }) 
  setItems(updatedItems)
  }
   

  const AllData = (items.map(item => {

    return(
      <Datastcok 
        key={item.id}
       price = {item.price}
        image = {item.image}
        type = {item.type}

      
      
       />
          )
      }))
    
  
    
   

    return(

      <div className="stock">


<div className="option">
   <h3>Explore our option</h3>

   <div className="buttons">
     <div className="btn2"> 

     <div > <button  className="btn" onClick={() => setItems(DataCards)}  >All</button> </div> 
   

       </div> 
       
   

     <div className="btn" >  <button  onClick={() => filterItem('Roadbike')}> Roadbike</button> </div> 
     <div className="btn" >  <button  onClick={() => filterItem('Offroad')}> Offroad</button> </div> 

     <div className="btn" >  <button  onClick={() => filterItem('Thriller')}> Thriller</button> </div> 
     <div className="btn" >  <button onClick={() => filterItem('Dirtbike')}>Dirtbike </button> </div> 
     {/* <div className="btn">  <button } > All </button> </div>  */}
   </div>
   
 </div> 

{/* <Databuttons
menuItems = {muneItems}
filterItems= {filterItems}
setItems = {setItems}

/> */}

<div className="Stock--container">
  {AllData}
</div>

 </div>




        


      
    )
       
}


 export default Oderstock
