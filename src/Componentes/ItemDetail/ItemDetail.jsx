import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../Context/CarritoContex';
export const ItemDetail = ({ prods }) => {
  const {addItem} = useCarritoContext()
  const onAdd = (cantidad)=>{
  addItem(prods,cantidad)
  }

    return (
      <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={prods.img} className="img-fluid rounded-start" alt= {prods.nombre} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{prods.nombre}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">${new Intl.NumberFormat('de-DE').format(prods.precio)}</small></p>
        <ItemCount valorInicial={1} stock={prods.stock} onAdd={onAdd}/> 
        <Link className='nav-link' to={'/Cart'}><button className='btn btn-dark'>finalizar compra</button></Link>
      </div>
    </div>
  </div>
</div>
    );
}

