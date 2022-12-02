import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import './contactanos.css'

const ContactanosPage = () => {
    return ( 
        <div>
            <main>
                <div>
                    <h1>Contactanos</h1>
                    <form action="">
                        <input type="text" name="nombre" id="nombre" placeholder="Ingrese aquí su nombre"/>
                        <input type="email" name= "email" id="email" placeholder="Ingrese aquí su e-mail"/>
                        <textarea name="consultas" id="consultas" cols="30" rows="10" placeholder="Ingrese quí su consulta" className="textarea"></textarea>
                        <input type="submit" value="Enviar" className="button"/>
                    </form>

                </div>
                {/* <img src="../assets/img/contactanos/imgMainContactanos.png" alt="" className="imgMainContactanos"/> */}
            </main>
        </div>
     );
}
 
export default ContactanosPage;