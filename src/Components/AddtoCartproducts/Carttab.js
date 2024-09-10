// import React, { useContext } from 'react'
// import DataCards from '../Datafile/Datafile'
// import { ShopContext } from '../context/Shop-context'
// import { Cartitem } from './Cartitem'
// const Carttab = () => {
//  const {cartItems} = useContext(ShopContext);



//   return (
//     <div className='cart'>
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>

//       <div className='cartItems'>
//         {DataCards.map((product)=> {
//           if(cartItems [product.id] !== 0) {
//             return <Cartitem data = {product} />
//           }
//         })
    

//         }

//       </div>
      
//       </div>
//   )
// }

// export default Carttab




import React, { useContext } from 'react';
import DataCards from '../Datafile/Datafile';
import { ShopContext } from '../context/Shop-context';
import { Cartitem } from './Cartitem';

const Carttab = () => {
  const { cartItems } = useContext(ShopContext);
  console.log('Carttab rendered with cartItems:', cartItems);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {DataCards.map((product) => {
          if (cartItems[product.id] > 0) {
            return <Cartitem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Carttab;