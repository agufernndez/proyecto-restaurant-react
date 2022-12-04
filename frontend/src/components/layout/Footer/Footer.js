import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <img src="./assets/Logo.png" alt="Logo Food Zero" className="logo"/>
                <h1>Soy el footer</h1>
                {/* <NavBar/> */}
                
                <ul>
                    {/* <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menú</Link>
                    </li>
                    <li>
                        <Link to="/contactanos">Contactanos</Link>
                    </li>
                    <li>
                        <Link to="/coctails">Vinos & Coctails</Link>
                    </li>
                    <li>
                    <a href="#">Reservas</a>
                    </li> */}
                </ul>
            </footer>
        </div>

    )
}

export default Footer;