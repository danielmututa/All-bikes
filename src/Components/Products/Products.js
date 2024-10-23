
// import Feature from '../Datafile/Products'
// import Fture from './Productsmap'


// import { useState } from 'react'

// const Featured = () => {
  
//     const [items, setItems] = useState(Feature);

    
//     const filterItem = (category) =>{
//      const updatedProducts = Feature.filter((allproducts) =>{
//         return allproducts.category === category
//      })

//       setItems(updatedProducts)
//     }
    



// const Datafeature = items.map(item =>{
 
  
//     return(
  
//         <Fture
        
//         picture={item.picture}
//         description={item.description}
//         button={item.button}
//         view={item.view}
//         rating={item.stars}



//         />


//     )



// })



// return ( 

//    <div className="buttonsfilters--allfeatures">
      
//       <div className="twofilterbuttons">
//       <button className="button--filter" onClick={() => filterItem("features") }>Featured</button>
//       <button className="button--filter" onClick={() => filterItem("new") }>new</button>
//       </div>

   

//     <div className="allfeatures">
        
//         {Datafeature}
        
//     </div>
//     </div>
   
//  );
// }
 


// export default Featured;





// import React, { useState, useEffect } from 'react';
// import axios from "axios"


// const Featured = () => {

//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         const fetchItems = async () => {
//           try {
//             const response = await axios.get('/api/products');
//             setItems(response.data);
//           } catch (error) {
//             console.error('Error fetching data:', error);
//           }
//         };
    
//         fetchItems();
//       }, []);

//   return (
   
// <div>
//       <h1>Items from MongoDB</h1>
//       <ul>
//         {items.map(item => (

//           <li key={item._id}>
//             {item.name} - {item.quantity}-${item.price}
//             </li>

//         ))}
//       </ul>
//     </div>



//   )
// }

// export default Featured






import React, { useState, useEffect } from 'react';
import axios from "axios";
import Fture from './Productsmap';

const Featured = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await axios.get('http://localhost:3000/api/products');
        console.log('Response:', response);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error details:', error.response);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const allproducts = (products.map((product) =>{

  return(
< Fture
    
    key={product.id}
  name=  {product.name}
  quantity=   {product.quantity} 
   price=  {product.price}
    />
  )
    

  }))

  return (
    <div>
      <h1>Featured Products from MongoDB</h1>
      {/* {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        
      )} */}
      {allproducts}
    </div>
  );
}

export default Featured;

