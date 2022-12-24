import React from 'react';
import { Link } from 'react-router-dom';
import "./button.css"


const Button = props => {
    return ( 
        <button className="button">
            <Link to={props.link}>{props.text}</Link> 
        </button>
     );
}
 
export default Button;