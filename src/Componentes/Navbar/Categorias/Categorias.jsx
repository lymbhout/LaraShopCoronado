import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/Categorias.css'
export const Categorias = () => {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </a>
        <ul className="dropdown-menu rounded-0  shadow-lg border-0">
            <li><h6 className="dropdown-header dropdown-item active">Vestidos</h6>
              <li><Link className='dropdown-item mb-3' to={`/category/VestidosEstandar`}>Vestidos Estandar</Link></li>
              <li><Link className='dropdown-item ' to={`/category/VestidosCurvi`}>Vestidos Curvi</Link></li>
            </li>
            <li><h6 className="dropdown-header dropdown-item active">Faldas</h6>
              <li><a className="dropdown-item mb-3" href="#">Falda Fenix</a></li>
              <li><a className="dropdown-item " href="#">Another action</a></li>
            </li>
            <li><h6 className="dropdown-header dropdown-item active me-5 ">Accesorios</h6>
              <li><a className="dropdown-item mb-3" href="#">Action</a></li>
              <li><a className="dropdown-item mb-3" href="#">Another action</a></li>
            </li>
            <Link  to={'/'}><a className="  display-6 ms-5 text-decoration-none" href="#">LARA SHOP</a></Link>
        </ul>
      </li>
    );
  }
