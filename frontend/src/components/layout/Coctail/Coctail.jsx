import React from 'react';
import "./coctail.css"

const Coctail = (props) => {
    return (
        <div className='coctailDiv'>
            <img src={props.img} alt="coctail imagen" className='coctailImg'/>
            <h3 className='coctailH3'>{props.nombre}</h3>
            <p className='coctailP'>Leer más</p>
        </div>
      );
}
 
export default Coctail;