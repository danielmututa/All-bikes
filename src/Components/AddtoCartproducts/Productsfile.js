

import { useState } from "react";
import Productsrent from "./Productsrent";
import DataCards from "../Datafile/Datafile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";





const  Productsfile = () => {


  const [items,setItems] = useState(DataCards);
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const searchedItems = DataCards.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
      );
    });
    setItems(searchedItems);
  };


  const filterItem = (name) =>{
  const updatedItems = DataCards.filter((curElem) => {
    return curElem.name === name;
  }) 
  setItems(updatedItems)
  }
   

  const AllData = (items.map(item => {

    return(
      <Productsrent
        key={item.id}
        id = {item.id}
       price = {item.price}
        image = {item.image}
        type = {item.type}
        add ={item.add}
        item = {item}
        details = {item.details}
        alldetails= {item.detail}
       />
          )
      }))
    
  
    
   

    return(

      <div className="pro--section--container">


<div className="pro--section">
  <div className="pro--section--heading">
   <h3>Explore our option</h3>

<div className="search--baricon">

<FontAwesomeIcon className="searchbar" icon={faSearch}/>
   <input
   
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search bikes"
     
    />
</div>
  
    
   

  </div>

   <div className="All-purchase-btns">
      

     <div > <button  className="btn" onClick={() => setItems(DataCards)}  >All</button> </div> 
   

       
       
   

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


 export default  Productsfile










 