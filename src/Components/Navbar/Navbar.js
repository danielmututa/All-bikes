import { NavLink } from "react-router-dom";
import React, { useContext } from 'react';
import logo from '../images/logo1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from "../context/Shop-context"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    const { cartItems } = useContext(ShopContext);


    const getTotalItemsInCart = () => {
        return Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
    };


    const inlineStyle = ({isActive}) =>{

        return{
               fontWeight: isActive ? 'Bold' : 'Normal',
               textDecoration : isActive ? 'none' : 'none',
              
           

        }
    }
 


    return (  
    <div className="nav">

       

            <div className="logo">
                <NavLink><img loading="lazy" src={logo } alt="" /></NavLink>
            </div>

        <div className="links">
        <div className="link-line">
        <NavLink to='/' style={inlineStyle}>Home</NavLink>
        <div className="linehover"><span></span></div>
        </div>


        <div className="link-line">
        <NavLink to='/about' style={inlineStyle}>About</NavLink>
        <div className="linehover"><span></span></div>
        </div>
            
            {/* <NavLink to= '/products' style={inlineStyle}>Products</NavLink> */}
            <div className="link-line">
            <NavLink to= '/Rentabike' style={inlineStyle}>Rent a bike</NavLink>
            <div className="linehover"><span></span></div>
            </div>

            <div className="link-line">
            <NavLink to= '/repairandservices' style={inlineStyle}>Services</NavLink>
            <div className="linehover"><span></span></div>
            </div>


             <NavLink to= '/authentication' style={inlineStyle}><FontAwesomeIcon icon={faUser}/> </NavLink>


            <NavLink to= '/cart' style={inlineStyle}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            {getTotalItemsInCart() > 0 && ( // Show notification only if there are items
                        <span className="notification-badge">{getTotalItemsInCart()}</span>
                    )}
            </NavLink>
        </div>
           
           
        </div>
 

    );
}
 
export default Navbar;