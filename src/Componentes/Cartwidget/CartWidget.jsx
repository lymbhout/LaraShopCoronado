import React from 'react';

export const CartWidget = ({contadorCarrito}) => {
    return (
        <>
            <button className='btn '><i class="bi bi-cart"></i></button>
            <p>{contadorCarrito}</p>
        </>
    );
}


