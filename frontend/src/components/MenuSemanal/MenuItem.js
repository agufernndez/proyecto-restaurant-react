import React from 'react';
import './menuItem.css'


const MenuItem = (props) => {
    const {title, description, imagen, price} = props;

    return (
        <div className='menuSemanal'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <img src={imagen}/>
            {/* <div dangerouslySetInnerHTML={{ ___html: }}></div> */}
            <p>{price}</p>
        </div>
    )
}

export default MenuItem;