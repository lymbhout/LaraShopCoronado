import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from '../../Context/CarritoContex';
export const Cart = () => {
    const {carrito, emptyCart,totalPrice} = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0
                ? //Si no existen productos en el carrito
                    <>
                        <h2>Carrito vacio</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                    </>
                ://Si existen productos en el carito
                <div className="container cartContainer">
                    <ItemList produc={carrito} plantilla="ItemCart"/>
                    <div className="divButtons">
                        <p>Resumen de la compra: {totalPrice()}</p>
                        <button className="btn btn-danger" onClick={() =>emptyCart()("Productos eliminados")}>Vaciar Carrito</button>
                        <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                        <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                    </div>
                </div>
            }            
    
        </>
    );
}



