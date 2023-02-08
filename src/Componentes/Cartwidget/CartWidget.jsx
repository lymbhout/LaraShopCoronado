import React from 'react';

export const CartWidget = ({contadorCarrito}) => {
    return (
        <>
            <button className='btn '><i className="bi bi-cart"></i></button>
            <p>{contadorCarrito}</p>
        </>
    );
}


