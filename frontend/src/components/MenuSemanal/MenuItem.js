import React from 'react';
import './menuItem.css'


const MenuItem = (props) => {
    const {title, description, imagen, price} = props;

    return (
        <div className='menuSemanal'>
            {/* <h1>{title}</h1>
            <h2>{description}</h2>
            <img src={imagen}/>
            
            <p>{price}</p> */}


    <section className=" sectionMenuesPrincipal">
        <article className="articleMenuesPrincipal">
            <section>
                <div>
                <h3>{title}</h3>
                <h5>${price}</h5>
                </div>
                <h4>{description}</h4>
            </section>
            <figure>
            <img src={imagen} className="imgMenuItem"/>
            </figure>
        </article>
    </section>
        </div>


    )
}

export default MenuItem;