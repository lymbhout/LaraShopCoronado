import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../Context/CarritoContex';
import { Loanding } from '../Loading/Loanding';

export const ItemDetail = ({ prods }) => {


  const {addItem} = useCarritoContext()
  const onAdd = (cantidad)=>{
  addItem(prods,cantidad)
  }

    return (
      <div className=" min-vw-100 mt-5 " style={{maxWidth: '540px'}}>
    <Loanding productosImg={

    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-4">
      <img src={prods.img} className="img-fluid rounded-start wait-loading" alt= {prods.nombre} />
      </div>
      <div className="col-md-8 card w-50 rounded-0 d-flex justify-content-center align-items-center">
        <div className="card-body">
          <h5 className="card-title fs-3">{prods.nombre}</h5>
          <p className="card-text">{prods.descripcion} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequatur necessitatibus excepturi illo maxime, suscipit quasi minima incidunt porro perferendis amet! Excepturi facere molestias vel ea, rerum ut atque dolore?</p>
          <p className="card-text"><small className="text-muted fs-4">${new Intl.NumberFormat('de-DE').format(prods.precio)}</small></p>
          <ItemCount  valorInicial={1} stock={prods.stock} onAdd={onAdd} />{`(${prods.stock} Disponible)`}
          <Link className='nav-link' to={'/Cart'}><button className='btn btn-dark rounded-0 '>finalizar compra</button></Link>
        </div>
      </div>
    </div>

    }></Loanding>
      
      </div>
      
    );
}

