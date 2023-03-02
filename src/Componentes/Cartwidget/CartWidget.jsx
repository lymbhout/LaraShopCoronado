import React from 'react';
import { Link } from 'react-router-dom';
export const CartWidget = ({contadorCarrito}) => {
    return (
        <>
            <Link className='nav-link' to={'/Cart'}><button className='btn '><i className="bi bi-cart"></i></button></Link>
            <p>{contadorCarrito}</p>
        </>
    );
}


