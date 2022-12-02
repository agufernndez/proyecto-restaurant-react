import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import Reservar from '../../components/layout/Reservar/Reservar';

const MenuPrincipalPage = () => {
    return ( 
        <div>
            <Header/>
            <main>
                <section className="sectionTitulo">
                    <h1>Menú Principal</h1>
                </section>

                <ul className="section sectionLinks">
                    <li><a href="../index.html">Inicio</a>
                    </li>
                    {/* <li>>></li> */}
                    <li><a href="./menu.html">Menu</a>
                    </li>
                    {/* <li>>></li> */}
                    <li><a href="./menuPrincial.html" className="active">Menu Principal</a>
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

            <Footer/>
        </div>
     );
}
 
export default MenuPrincipalPage;