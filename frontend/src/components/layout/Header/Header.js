// import logo from "../../../../public/assets/Logo.png"

// import logo from "/frontend/public/assets/Logo.png" 
// import iconMenu from "/frontend/public/assets/icon/bx_menu.svg"
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <h1 className="h1Header">Hola soy el componente Header</h1>
            {/* <img src={logo} alt="Logo Food Zero" className="logo"/> */}
            {/* <img src={iconMenu} alt="Toggle Menu" className="toggleMenu"/> */}
            {/* <!-- ACA PONER EN NAVBAR MOBILE CON LAS SECCIONES DE INICIO - CONTACTANOS - MENU - VINOS & COCTAILS --> */}
            {/* <!-- <nav>
            <ul>
                <li>
                <a href="">Inicio</a>
                </li>
                <li>
                <a href="">Contactanos</a>
                </li>
                <li>
                <a href="">Menú</a>
                </li>
                <li>
                <a href="">Vinos & Coctails</a>
                </li>
            </ul>
            </nav> --> */}
        </header>
    )
}

export default Header