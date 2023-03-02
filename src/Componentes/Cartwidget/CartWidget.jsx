import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../Context/CarritoContex';
export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className='nav-link' to={'/Cart'}><button className='btn '><i className="bi bi-cart">{getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}</i></button>
            {/* {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>} */}
            </Link>
        </>
    );
}


