

import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
// import './HamburgerMenu.css'; // Ensure this path is correct


const inlineStyle = ({isActive}) =>{

    return{
           fontWeight: isActive ? 'Bold' : 'Normal',
           textDecoration : isActive ? 'none' : 'none',
          
       

    }
}



const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="hamburger-menu">
 {/* <div className="position--fixed"> */}


            <Hamburger className="position--fixed"
                toggled={isOpen} 
                toggle={handleToggle} 
            />
       
            <div className={`menu-list ${isOpen ? 'show' : ''}`} role="navigation" aria-label="Main Menu">
                <ul>
                <li onClick={handleClose}> <NavLink to='/' style={inlineStyle}>Home</NavLink></li>
                <li onClick={handleClose}>         <NavLink to='/about' style={inlineStyle}>About</NavLink></li>
          <li onClick={handleClose}><NavLink to= '/Rentabike' style={inlineStyle}>Rent a bike</NavLink></li>
          <li onClick={handleClose}> <NavLink to= '/repairandservices' style={inlineStyle}>Services</NavLink></li>
                </ul>
            </div>
            </div>
        // </div>
    );
};

export default HamburgerMenu;