// import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from '../../components/MenuSemanal/MenuItem';
import './menuSemanal.css'


const MenuSemanal = (props) => {

    const [loading, setLoading] = useState(false);
    const [MenuSemanal, setMenuSemanal] = useState([]);

    useEffect(() => {
        const cargarMenuSemanal = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/menuSemanal');
            setMenuSemanal(response.data);
            setLoading(false);

        };
        cargarMenuSemanal();
    }, []);


    return (
        <section>
            <section className="section sectionMenuSombra">
                    <div>
                        <h2 className="h2Principal">Menú Semanal</h2>
                        <h2 className="h2Sombra">Menú Semanal </h2>
                    </div>
                </section>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                MenuSemanal.map(item => <MenuItem key={item.id} title={item.nombreDelPlato} description={item.descripcion} imagen={item.img_id} price={item.precio}/>)
            )}
        </section>
    )
}

export default MenuSemanal;