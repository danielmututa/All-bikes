

import { NavLink } from "react-router-dom";
import React, { useState , useContext  } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
// import './HamburgerMenu.css'; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from "../context/Shop-context"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";







const inlineStyle = ({isActive}) =>{

    return{
           fontWeight: isActive ? 'Bold' : 'Normal',
           textDecoration : isActive ? 'none' : 'none',
          
       

    }
}






const HamburgerMenu = () => {

  



    const { cartItems } = useContext(ShopContext);


    const getTotalItemsInCart = () => {
        return Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="hamburger-menu">



    

            <Hamburger className="position--fixed"
                toggled={isOpen} 
                toggle={handleToggle} 
            />


<NavLink className="authentication--menu" to='/auth' style={inlineStyle}><FontAwesomeIcon icon={faUser}/> </NavLink>


       
<NavLink className="carticon" to= '/cart' style={inlineStyle}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            {getTotalItemsInCart() > 0 && ( // Show notification only if there are items
                        <span className="notification-badge">{getTotalItemsInCart()}</span>
                    )}
            </NavLink>





       
            <div className={`menu-list ${isOpen ? 'show' : ''}`} role="navigation" aria-label="Main Menu">
                <ul className="height--menu">
                <li onClick={handleClose}> <NavLink to='/' className="white" style={inlineStyle}>Home</NavLink></li>
                <li onClick={handleClose}>         <NavLink to='/about' className="white" style={inlineStyle}>About</NavLink></li>
          <li onClick={handleClose}><NavLink to= '/Rentabike' className="white" style={inlineStyle}>Rent a bike</NavLink></li>
          <li onClick={handleClose}> <NavLink to= '/repairandservices' className="white" style={inlineStyle}>Services</NavLink></li>

                </ul>
            </div>
            </div>
     
    );
};

export default HamburgerMenu;