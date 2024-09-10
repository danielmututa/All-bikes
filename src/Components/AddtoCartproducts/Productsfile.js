

import { useState } from "react";
import Productsrent from "./Productsrent";
import DataCards from "../Datafile/Datafile";
// import Databuttons from "./Databuttons";

// import { useNavigate } from "react-router-dom";








const  Productsfile = () => {


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
      <Productsrent
        key={item.id}
       price = {item.price}
        image = {item.image}
        type = {item.type}
        add ={item.add}
        item = {item}
        details = {item.details}
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


 export default  Productsfile










 
//  import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addItem = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };



// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import About from './Components/About/About';
// import Home from './Components/Home/Home';
// import Navbar from './Components/Navbar/Navbar';
// import Oderstock from './Components/Oderstock/Oderstock';
// import Nomatch from './Components/Nomatch/Nomatch';
// import Products from './Components/Products/Products';
// import Footer from './Components/Footer/Footer';
// import { CartProvider } from 'react-use-cart'; // Ensure this is the correct import
// import Productsfile from './Components/AddtoCartproducts/Productsfile';
// import Carttab from './Components/AddtoCartproducts/Carttab';

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Navbar />
//         <CartProvider>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='about' element={<About />} />
//             <Route path='oderstock' element={<Oderstock />} />
//             <Route path='Rentabike' element={<Productsfile />} />
//             <Route path='cart' element={<Carttab />} />
//             <Route path='*' element={<Nomatch />} />
//             <Route path='products' element={<Products />} />
//           </Routes>
//         </CartProvider>
//         <Footer />
//       </>
//     </div>
//   );
// }

// export default App;


// import { CartProvider } from './context/CartContext'; // Adjust the path as necessary


// /your-project
// ├── /src
// │   ├── /Components
// │   │   ├── /AddtoCartproducts
// │   │   │   ├── Productsfile.js
// │   │   │   ├── Carttab.js
// │   │   ├── /About
// │   │   │   └── About.js
// │   │   ├── /Home
// │   │   │   └── Home.js
// │   │   ├── /Navbar
// │   │   │   └── Navbar.js
// │   │   ├── /Footer
// │   │   │   └── Footer.js
// │   │   ├── /Products
// │   │   │   └── Products.js
// │   │   ├── /Oderstock
// │   │   │   └── Oderstock.js
// │   │   ├── /Nomatch
// │   │   │   └── Nomatch.js
// │   ├── /context
// │   │   └── CartContext.js  // <-- Place your CartProvider here
// │   ├── App.js
// │   ├── index.js
// ├── package.json