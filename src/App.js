import {Routes,Route} from 'react-router-dom'
 import './App.css'
// import { useState } from 'react';
 import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Oderstock from './Components/Oderstock/Oderstock';
import Nomatch from './Components/Nomatch/Nomatch';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.css'
import './Components/Products/Products.css'
import Authentication from './Components/authentication/Pages/Authentication'
// import Dashboard from './Components/authentication/Pages/Dashboard'
import PrivateRouteLayout from  './Components/authentication/Layout/PrivateRouteLayout'
// import {CartProvider} from 'react-use-cart'
import Signup from './Components/authentication/Login/Signup'
// import DataCards from './Components/Datafile/Datafile';
import Productsfile from './Components/AddtoCartproducts/Productsfile';
// import Layout from './Components/AddtoCartproducts/Layout';
import Carttab from './Components/AddtoCartproducts/Carttab';
import Shopcontextprovider from './Components/context/Shop-context';
import Repairandservices from './Components/repairandservices/Repairandservices';
import HamburgerMenu from './Components/Navbar/Humbergarmenu';



function App() {
  // const [item] = useState(DataCards)
  return (
    <div className="App">
      <>

    <Shopcontextprovider>
        <Navbar />
        <HamburgerMenu/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>}/>
            <Route path='oderstock' element={< Oderstock />} />
            {/* <Route path='Rentabike' element={<Productsfile/>} /> */}
            <Route path='cart' element={<Carttab/>} />
            <Route path='*' element={<Nomatch/>} />
            <Route path='products' element={<Products/>}/> 
            <Route path='repairandservices' element={<Repairandservices/>}/>
            <Route path='cart' element={<Carttab/>}/> 
            <Route path='/authentication'  element={<Authentication/>}/>
            <Route path='/signup'  element={  <Signup />}/>
            

            <Route  element={<PrivateRouteLayout/>} >
            <Route path='Rentabike' element={<Productsfile/>} />
 </Route> 

          </Routes>
         
        <Footer/>
        </Shopcontextprovider>
      </>
    </div>
  );
}
 
export default App;