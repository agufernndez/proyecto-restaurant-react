import React from 'react';
import { Link } from 'react-router-dom';
import './headerFooter.css'

const HeaderFooter = () => {
    return (
        <div>
            <footer className='footer'>
                <img src="./assets/Logo.png" alt="Logo Food Zero" className="logo"/>                
                <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactanos">Contactanos</Link></li>
                        <li><Link to="/coctails">Vinos & Coctails</Link></li>
                        <li><Link to="/menusemanal">Menu Semanal</Link></li>

                </ul>
            </footer>
        </div>

    )
}

export default HeaderFooter;