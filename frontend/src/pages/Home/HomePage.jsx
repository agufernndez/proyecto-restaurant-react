import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import Reservar from '../../components/layout/Reservar/Reservar';
import "./home.css"

const HomePage = () => {
    return ( 
        <div>
            <Header/>
            <main>
                <section class="section sectionPrincipal">
                    <div>
                    <h1>Ingredientes de calidad. <br/>
                        Sabores inigualables. <br/>
                        Pasión asegurada.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dolor in felis lobortis gravida et et leo.</p>
                    <button>
                        {/* <a href="./index.html#reservas">Reservar Ahora</a>  */}
                    </button>
                    </div>
                </section>

                <section class="section sectionSobreNosotros">
                    <div>
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio purus, viverra in euismod eu, molestie non dui.  </p>

                    <p>Nam eu viverra ante. Pellentesque in felis massa. Vivamus non risus turpis. Integer in congue lacus, ut sodales est.</p>
                    <div class="leerMasdiv">

                        <a href="" class="leerMas">Leer más </a>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    </div>
                </section>

                <section class="section sectionFrase">
                    <div>
                    <img src="./assets/icon/bxs_quote-alt-left.svg" alt=""/>
                    <p>Un buen restaurante es como unas vacaciones; te transporta, y se convierte en mucho más que solo la comida.
                    </p>
                    <p>Philip Rosenthal</p>
                    </div>
                </section>

                <section class="section sectionNuestroMenu">
                    <img src="./assets/img/index/ourMenu.jpg" alt="Imagen de sectionNuestroMenu" class="fotoMenu"/>
                    <h2><a href="./pages/menu.html">Nuestro Menu</a> </h2>
                    {/*<div>
                    <img src="./assets/icon/leftMenu.svg" alt="" class="flecha"/>
                    <img src="./assets/icon/rightMenu.svg" alt="" class="flecha"/>
                    </div> */}
                    <div class="sectionNuestroMenu__menu">
                        <h4>Plato Principal</h4>
                        <article>
                        <div>
                            <h5>Lorem ipsum dolor sit amet</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h5>$2.500</h5>
                        </article>

                        <article>
                        <div>
                            <h5>Vivamus sodales augue vitae arcu</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h5>$3.200</h5>
                        </article>

                        <article>
                        <div>
                            <h5>Pellentesque semper semper</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h5>$2.600</h5>
                        </article>

                        <article>
                        <div>
                            <h5>Vestibulum est turpis</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h5>$3.300</h5>
                        </article>

                        <article>
                        <div>
                            <h5>Nullam elementum magna</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h5>$3.600</h5>
                        </article>

                        <article>
                        <div>
                            <h5>Phasellus convallis maximus</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <h5>$2.400</h5>
                        </article>
                    </div>
                </section>

                <section class="section sectionGaleriaFotos">
                    <div>
                    <h2>Galeria de Fotos</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat massa, et condimentum nunc. Praesent consectetur lorem in efficitur dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lobortis egestas cursus. Vestibulum faucibus molestie est, ac efficitur ex ullamcorper a.</p> -->
                    </div>
                    <div class="sectionGaleriaFotos__carrousel">
                    <img src="./assets/icon/leftMenu.svg" alt="flecha izquierda" class="flecha"/>
                    <img src="./assets/img/index/galleryCenter.jpg" alt="Foto Galeria 1" class="galeriaFoto1"/>
                    <img src="./assets/icon/rightMenu.svg" alt="flecha derecha" class="flecha"/>
                    <!-- <img src="./assets/img/index/galleryCenter.jpg" alt="Foto Galeria 2"/>
                    <img src="./assets/img/index/galleryRight.jpg" alt="Foto Galeria 3"/> */}

                    </div>
                </section>

                <Reservar/>

                <section class="section sectionContactanos">
                    <h2>Contactanos</h2>
                    <div>
                    <img src="./assets/img/index/contactUs.png" alt=""/>
                    <div class="sectionContactanos__info">
                        <p><i class="fa-solid fa-location-dot"></i>Av. Argentina 480<br/> Neuquén Capital.</p>
                        <p><i class="fa-regular fa-clock"></i>Horario: 10:00 am - 23:00 pm </p>

                        <p><i class="fa-regular fa-phone"></i>+54 9 299 1234567</p>
                    </div>
                    </div>
                    <button>
                    <a href="./pages/contactanos.html">Contactanos</a> 
                    </button>
                </section>
            </main>
            <Footer/>
            

    </div>

    );
}

export default HomePage;