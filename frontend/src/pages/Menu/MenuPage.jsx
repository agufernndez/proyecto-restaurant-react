import React from 'react';
import { Link } from 'react-router-dom';
import Reservar from '../../components/layout/Reservar/Reservar';
import './menu.css';

const MenuPage = () => {
    return ( 
        <div>
            <main className="menuPage">
                <section className="sectionTitulo">
                    <h1>Menú</h1>
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
                        <h2 className="h2Principal">Menú</h2>
                        <h2 className="h2Sombra">Menú</h2>
                    </div>
                </section>

                <section className="section sectionMenues">
                    <article>
                        <figure>
                            <img src="../../../assets/../../../assets/img/menu/menuEntrada.jpg" alt=""/>
                        </figure>
                        <div>
                            <h3>Entradas</h3>
                            <a href="#">Ver Menú</a>
                        </div>
                    </article>

                    <article>
                        <figure>
                            <img src="../../../assets/img/menu/menuDesayuno.jpg" alt=""/>
                        </figure>
                        <div>
                            <h3>Desayuno</h3>
                            <a href="#">Ver Menú</a>
                        </div>
                    </article>

                    <article>
                        <figure>
                            <img src="../../../assets/img/menu/menuAlmuerzo.jpg" alt=""/>
                        </figure>
                        <div>
                            <h3>Almuerzo</h3>
                            <a href="#">Ver Menú</a>
                        </div>
                    </article>

                    <article>
                        <figure>
                            <img src="../../../assets/img/menu/menuPrincipal.jpg" alt=""/>
                        </figure>
                        <div>
                            <h3>Plato Principal</h3>
                            <a href="#">Ver Menú</a>
                        </div>
                    </article>

                    <article>
                        <figure>
                            <img src="../../../assets/img/menu/menuPostre.jpg" alt=""/>
                        </figure>
                        <div>
                            <h3>Postres</h3>
                            <a href="#">Ver Menú</a>
                        </div>
                    </article>

                    <article>
                        <figure>
                            <img src="../../../assets/img/menu/menuPanes.jpg" alt=""/>
                        </figure>
                        <div>
                            <h3>Panes</h3>
                            <a href="#">Ver Menú</a>
                        </div>
                    </article>
                </section>

                <Reservar/>

            </main>
        </div>
     );
}
 
export default MenuPage;