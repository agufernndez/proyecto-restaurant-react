import React from 'react';
import { Link } from 'react-router-dom';
import Reservar from '../../components/layout/Reservar/Reservar';
import './menuPrincipal.css'

const MenuPrincipalPage = () => {
    return ( 
        <div>
            <main>
                <section className="sectionTitulo">
                    <h1>Menú Principal</h1>
                </section>

                <ul className="section sectionLinks">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li> - </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li> - </li>
                    <li>
                        <Link to="/menuPrincipal">Menu Principal</Link>
                    </li>
                </ul>

                <section className="section sectionMenuSombra">
                    <div>
                        <h2 className="h2Principal">Menú Princial</h2>
                        <h2 className="h2Sombra">Menú Princial</h2>
                    </div>
                </section>

                <section className="section sectionMenuesPrincipal">
                <article>
                    <div>
                    <h3>Sable fish with Saffron Ristto</h3>
                    <h5>$2.500</h5>
                    </div>
                    <h4>Baked with basil, saffron, lemon juice, white wine, onion, garlic and tomato, served with white asparagus</h4>
                </article>

                <article>
                    <div>
                    <h3>Roasted Rack of Lamb</h3>
                    <h5>$3.500</h5>
                    </div>
                    <h4>Rosemary, garlic, Dijon mustard, herbs, pistachios</h4>
                </article>

                <article>
                    <div>
                    <h3>Cornish Game Hen</h3>
                    <h5>$2.900</h5>
                    </div>
                    <h4>BRubbed with rosemary, lemon and served with porcini mushroom risotto</h4>
                </article>

                <article>
                    <div>
                    <h3>Veal Porterhouse Chop</h3>
                    <h5>$3.100</h5>
                    </div>
                    <h4>Milk fed center cut from the loin, rubbed with rosemary, lemon juicce, extra virgin olive oil</h4>
                </article>

                </section>

                <Reservar/>

            </main>
        </div>
     );
}
 
export default MenuPrincipalPage;