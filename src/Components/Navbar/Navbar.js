import { NavLink } from "react-router-dom";
import logo from '../images/logo1-300x158.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";

const Navbar = () => {
  
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
            <NavLink to= '/cart' style={inlineStyle}><FontAwesomeIcon icon={faShoppingCart}/></NavLink>
        </div>
           
           
        </div>
 

    );
}
 
export default Navbar;