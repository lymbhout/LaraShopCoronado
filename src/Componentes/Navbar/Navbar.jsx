import React from 'react';
import { Link } from 'react-router-dom';
import { Categorias } from './Categorias/Categorias.jsx';
import {CartWidget} from '../Cartwidget/CartWidget.jsx';
import { Search } from './Search/Search.jsx';
import { Secciones } from './Secciones/Secciones.jsx';  
const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className='' to={'/home'}><a className="  display-6 text-decoration-none" href="#">LARA Shop</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Secciones />
        <Categorias />
      </ul>
      <Search />
      <CartWidget
      contadorCarrito ={10}/>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
