import React from 'react';

export const Categorias = () => {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item  active opacity-80 " href="#">ROPA</a></li>
          <li><a className="dropdown-item" href="#">Pantalones</a></li>
          <li><a className="dropdown-item" href="#">Camisas</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item active opacity-80" href="#">ACCESORIOS</a></li>
          <li><a className="dropdown-item" href="#">Zarcillos</a></li>
          <li><a className="dropdown-item" href="#">Anillos</a></li>
        </ul>
      </li>
    );
}

