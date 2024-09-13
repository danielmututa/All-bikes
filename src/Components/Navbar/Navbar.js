import { NavLink } from "react-router-dom";
import React, { useContext } from 'react';
import logo from '../images/logo1-300x158.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { ShopContext } from "../context/Shop-context"; 
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
                <NavLink><img src={logo } alt="" /></NavLink>
            </div>

        <div className="links">
        <NavLink to='/' style={inlineStyle}>Home</NavLink>
            <NavLink to='/about' style={inlineStyle}>About</NavLink>
            <NavLink to= '/products' style={inlineStyle}>Products</NavLink>
            <NavLink to= '/Rentabike' style={inlineStyle}>Rent a bike</NavLink>
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