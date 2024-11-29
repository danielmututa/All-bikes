import {Routes,Route} from 'react-router-dom'
 import './App.css'
 import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Oderstock from './Components/Oderstock/Oderstock';
import Nomatch from './Components/Nomatch/Nomatch';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.css'
import './Components/Products/Products.css'
import Productsfile from './Components/AddtoCartproducts/Productsfile';
import Carttab from './Components/AddtoCartproducts/Carttab';
import Shopcontextprovider from './Components/context/Shop-context';
import Repairandservices from './Components/repairandservices/Repairandservices';
import HamburgerMenu from './Components/Navbar/Humbergarmenu';
import ServiceBooking from './Components/repairandservices/Servicebooking';
import Reviewandrating from './Components/reviewandratinng/Reviewandrating';
import AccountForm from './Components/AddtoCartproducts/Accountform';
import SellerDashboard from './Components/ManageListings/SellerDashboard';
import UserEventListing from './Components/ManageListings/Usereventlistings';
import MechanicEventManagement from './Components/ManageListings/Mechanicsandevents';
import UserListing from './Components/ManageListings/UserListing';
import Auth from './Components/authentication/auth/Auth';
import MotBooking from './Components/repairandservices/MotBooking';
import PrivateRouteLayout from './Components/authentication/Layout/PrivateRouteLayout';

function App() {
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
            <Route path='cart' element={<Carttab/>} />
            <Route path='*' element={<Nomatch/>} />
            <Route path='products' element={<Products/>}/> 
            <Route path='repairandservices' element={<Repairandservices/>}/>
            <Route path='cart' element={<Carttab/>}/> 
              <Route path='/reviews' element={ <Reviewandrating/> }/>
              <Route path='/servicebooking' element={<ServiceBooking/> } />
              <Route path='/payments' element={<AccountForm/> } />
              <Route path='userlistings' element={<UserListing/> } />
            <Route path='seller' element={<SellerDashboard/>}/>
               <Route path='events' element={<UserEventListing/>} />
               <Route path='eventsupload' element={<MechanicEventManagement/>} />
                <Route path='motbooking' element={<MotBooking/>} />



        <Route path="/auth" element={<Auth />} />
        

  
               {/* Protected route (only this one will be protected) */}
        {/* <Route element={<PrivateRouteLayout/>}> */}
        <Route path='Rentabike' element={<Productsfile/>} />
        {/* </Route> */}


            
         
           {/* </Route>  */}

          </Routes>
         
        <Footer/>
        </Shopcontextprovider>
      </>
    </div>
  );
}
 
export default App;