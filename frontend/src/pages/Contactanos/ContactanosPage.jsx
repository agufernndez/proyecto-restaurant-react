import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import './contactanos.css'

const ContactanosPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        consulta: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contactanos', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return ( 
        <div>
            <main className="contactanosPage">
                <div>
                    <h1>Contactanos</h1>
                    <form action="/contactanos" method='post' onSubmit={handleSubmit}>

                        <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese aquí su nombre"/>

                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Ingrese aquí su e-mail"/>

                        <input type="telefono" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ingrese aquí su telefono"/>

                        <textarea name="consulta" id="consulta" value={formData.consulta} onChange={handleChange} cols="30" rows="10" placeholder="Ingrese quí su consulta" className="textarea"></textarea>
                        
                        <input type="submit" value="Enviar" className="inputEnviar"/>

                    {sending ? <p>Enviando..</p> : null }
                    {msg ? <p>{msg}</p> : null}

                    </form>

                </div>
                <img src="../../../assets/img/contactanos/imgMainContactanos.png" alt="" className="imgMainContactanos"/>
            </main>
        </div>
    );
}

export default ContactanosPage;