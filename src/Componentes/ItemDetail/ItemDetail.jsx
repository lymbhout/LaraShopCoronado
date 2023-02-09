import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
export const ItemDetail = ({prods}) => {
    return (
      <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`${prods.img}`} className="img-fluid rounded-start" alt= {prods.nombre} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{prods.nombre}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <ItemCount valorInicial={1} stock={prods.stock}/> 
        <button className='btn btn-dark'>finalizar compra</button>

      </div>
    </div>
  </div>
</div>
    );
}

