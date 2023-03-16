import React from 'react';
import { useCarritoContext } from '../../Context/CarritoContex';
import '../../CSS/ItemCart.css'
export const ItemCart = ({item}) => {
    const {removeItem} =useCarritoContext()
    return (

    <div className="card mb-3 ">
        <div className="row g-0 d-flex flex-row justify-content-between ">
            <div className="imgCart ">
                <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start "/>
            </div>
            <div className="col-md-8">
                <div className="card-body p-0">
                    <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                    <p className="card-text"> Cantidad: {item.cant}</p>
                    <p className="card-text"> Precio Unitario:  ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text"> Subtotal:  ${new Intl.NumberFormat('de-DE').format(item.cant * item.precio)}</p>
                    <button className="btn btn-danger rounded-0" onClick={() => removeItem(item.id)}>Eliminar del carrito</button>
                </div>
            </div>
        </div>
    </div>
    );
}


