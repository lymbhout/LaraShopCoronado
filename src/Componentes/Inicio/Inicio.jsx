import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
    return (
        <div className='d-flex  justify-content-center align-items-center flex-column'>
            <img src="./video/LaraShop.gif" alt="Logo"  className=' w-40 '/>
            <Link className='btn btn-dark w-15 ' to={'/home'}>Comprar <i className="bi bi-cart"></i></Link>
        </div>
    );
}

