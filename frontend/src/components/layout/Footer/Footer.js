import './footer.css'

const Footer = () => {
    return (
        // <h1 className= "footer">Soy el Footer</h1>


    //     ESTE CODIGO ES EL QUE CORRESPONDE AL FOOTER, UNA VEZ QUE FUNCIONE TODO LO PONDRÉ
        <footer className='footer'>
            <img src="./assets/Logo.png" alt="Logo Food Zero" className="logo"/>
            <ul>
                <li>
                <a href="./index.html">Inicio</a>
                </li>
                <li>
                <a href="./pages/menu.html">Menú</a>
                </li>
                <li>
                <a href="#">Sobre Nosotros</a>
                </li>
                <li>
                <a href="./pages/vinosYcoctails.html">Vinos & Coctails</a>
                </li>
                <li>
                <a href="#">Reservas</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer