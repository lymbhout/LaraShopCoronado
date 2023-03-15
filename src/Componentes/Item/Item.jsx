import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Item.css'
export const Item = ({item}) => {
    return (
      <div className="card m-5  hover-zoom border-0 rounded-0" style={{width: '18rem'}}>
        <Link className='' to={`/item/${item.id}`}>
          <img src={item.img}className="card-img-top hover-zoom2" alt={`imagen de ${item.nombre}`} />
        <div className="card-body">
          <h5 className="card-title text-center">{item.nombre} {item.modelo}</h5>
          <p className="card-text text-center"> ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
        </div></Link>
      </div>
    );
  }
