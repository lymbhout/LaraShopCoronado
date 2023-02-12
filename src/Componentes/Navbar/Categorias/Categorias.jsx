import React from 'react';
import { Link } from 'react-router-dom';
export const Categorias = () => {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </a>
        <ul className="dropdown-menu rounded-0 shadow-lg border-0 ">
          <li><a className="dropdown-item  active opacity-80 " href="#">ROPA</a></li>
          <li><Link className='dropdown-item' to={'/category/1'}>Vestidos Estandar</Link></li>
          <li><Link className='dropdown-item' to={'/category/2'}>Vestidos Curvi</Link></li>
          <li><a className="dropdown-item active opacity-80" href="#">ACCESORIOS</a></li>
          <li><a className="dropdown-item" href="#">Zarcillos</a></li>
          <li><a className="dropdown-item" href="#">Anillos</a></li>
        </ul>
      </li>
    );
}

