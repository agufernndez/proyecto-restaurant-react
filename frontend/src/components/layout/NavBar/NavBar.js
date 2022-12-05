import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return ( 
        <nav >
            <div className="navBar">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/menu">Menú</Link></li>
                    <li><Link to="/contactanos">Contactanos</Link></li>
                    <li><Link to="/coctails">Vinos & Coctails</Link></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;