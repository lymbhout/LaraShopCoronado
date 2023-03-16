import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from '../../Context/CarritoContex';
import '../../CSS/Cart.css'
export const Cart = () => {
    const {carrito, emptyCart,totalPrice} = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0
                ? //Si no existen productos en el carrito
                    <div className='d-flex flex-column justify-content-center align-items-center m300'>
                        <h2>Carrito vacio <i className='bi bi-cart'></i></h2>
                        <Link className="nav-link" to={"/home"}><button className="btn btn-dark rounded-0">Continuar comprando</button></Link>
                    </div>
                ://Si existen productos en el carito
                <div className="container  d-flex flex-column  ">
                    <ItemList produc={carrito} plantilla="ItemCart"/>
                    <div className="divButtons card d-flex flex-row  justify-content-between ">
                        <button className='text-uppercase btn btn-light rounded-0 '>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</button>
                        <button className="btn btn-danger rounded-0 modificarCart " onClick={() =>emptyCart()("Productos eliminados")}>Vaciar Carrito</button>
                        <Link className="nav-link  " to={"/home"}><button className="btn btn-dark opacity-70 rounded-0">Continuar comprando</button></Link>
                        <Link className="nav-link  " to={"/checkout"}><button className="btn btn-dark opacity-70 rounded-0">Finalizar Compra</button></Link>
                    </div>
                </div>
            }            
    
        </>
    );
}



