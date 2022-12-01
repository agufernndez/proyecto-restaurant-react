
import "./header.css";
// import "./styles.css"


const Header = () => {
    return (
        <header className="header">
            {/* <h1 className="h1Header">Hola soy el componente Header</h1> */}
            <img src="assets/Logo.png" alt="Logo Food Zero" className="logo"/>
            <img src="assets/icon/bx_menu.svg" alt="Toggle Menu" className="toggleMenu"/>
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