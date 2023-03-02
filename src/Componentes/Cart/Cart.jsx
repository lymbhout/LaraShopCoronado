import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const carrito =[
        {
            id: "FaldaSirenaM3",
            idCategoria: "faldas",
            nombre:"Falda Sirena",
            modelo:"estandar",
            categoria:"falda",
            precio:10.99,
            stock:5,
            cant: 25,
            img:"https://firebasestorage.googleapis.com/v0/b/larashop-3c266.appspot.com/o/falda%20sirena%2FFS3.jpg?alt=media&token=b619213d-2ad8-4be3-b18e-5a249a67a79c"
        }    ]
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
                        <p>Resumen de la compra: PrecioTotal</p>
                        <button className="btn btn-danger" onClick={() => console.log("Productos eliminados")}>Vaciar Carrito</button>
                        <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                        <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                    </div>
                  </div>
            }            
    
        </>
    );
}



