import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src="./assets/Logo.png" alt="Logo Food Zero" className="logo"/>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Menu">Menú</Link>
                </li>
                <li>
                    <Link to="/Contactanos">Contactanos</Link>
                </li>
                <li>
                    <Link to="/Coctails">Vinos & Coctails</Link>
                </li>
                {/* <li>
                <a href="#">Reservas</a>
                </li> */}
            </ul>
        </footer>
    )
}

export default Footer