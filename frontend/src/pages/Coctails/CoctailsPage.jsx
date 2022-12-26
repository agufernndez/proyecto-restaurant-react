import React from 'react';
import { Link } from 'react-router-dom';
import Coctail from '../../components/layout/Coctail/Coctail';
import Reservar from '../../components/layout/Reservar/Reservar';
import "./coctails.css"



const CoctailsPage = () => {
    return ( 
        <div>
            <main>
            <section className="sectionTitulo">
                    <h1>Vinos & Coctails</h1>
                </section>

                <ul className="section sectionLinks">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li> » </li>
                    <li>
                        <Link to="/coctails">Vinos & Coctails</Link>   
                    </li>
                    
                </ul>

                <section className=" sectionTituloSombra">
                    <h2 className="h2Principal">Vinos & Coctails</h2>
                    <h2 className="h2Sombra">Vinos & Coctails</h2>
                </section>

                <section className='section sectionVinos'>
                    <img src="../../../assets/img/vinos&cocteles/image9.png" alt="" />
                    <div>
                        <p>« El vino, cuando es verdaderamente vino, revela la luz de la materia para despertar la del hombre. Viene a revelar nuestra parte de luz y esa es la verdadera embriaguez. »</p>
                        <p>Bruno Quenioux</p>
                    </div>
                </section>

                <section className='section sectionCartaCoctail'>
                    <h2>Elegí tu vino</h2>
                    <section className='cartaCoctail'>
                            <Coctail img="../../../assets/img/vinos&cocteles/image12.jpg" nombre="France"/>
                            <Coctail img="../../../assets/img/vinos&cocteles/image12-2.jpg" nombre="Italy"/>
                            <Coctail img="../../../assets/img/vinos&cocteles/image11.jpg" nombre="German"/>
                            <Coctail img="../../../assets/img/vinos&cocteles/image10.jpg" nombre="Ruby"/>
                    </section>
                </section>

                <Reservar/>

            </main>
        </div>
        );
}

export default CoctailsPage;