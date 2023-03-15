import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useCarritoContext } from '../../Context/CarritoContex';
import { Link } from 'react-router-dom';
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";
export const Checkout = () => {
    const {carrito,emptyCart,totalPrice} = useCarritoContext()
    let Navigate = useNavigate()
    const datosForm = useRef()
    // validacion de email
    const [email, setEmail] = useState("");
    const [confirmarEmail, setconfirmarEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const configEmail = (event) => {
        setconfirmarEmail(event.target.value);
    };
    
    const isFormValid = () => {
        return email === confirmarEmail && email !== "";
    };
// -------
    const consultarForm = (e)=>{
        e.preventDefault()
        const data = new FormData(datosForm.current)
        const cliente =Object.fromEntries(data)

    

        const aux = [...carrito]
        
        aux.forEach(prodCarrito => { //Descontar stock de BDD
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Descontar stock 
                updateProducto(prodBDD.id, prodBDD)
            })
        })
        const Confirmacion = (input,iput)=>{
            input != iput
            &&
                
                emptyCart()
            }
            Confirmacion(cliente.confirmarEmail,cliente.email)
            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
                toast(` Muchas gracias por comprar en LaraShop, su orden de compra con el id ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                e.target.reset()
                emptyCart()
                Navigate('/')
            })
        }
        return (
            <>
            
            {carrito.length === 0
                ?
                <>
                    <h2>Para finalizar la compra debe tener productos en el carrito</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container contForm">
                    <form onSubmit={consultarForm} ref={datosForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={handleEmailChange} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmarEmail" className="form-label">Confirmar Email</label>
                            <input type="email" className="form-control" name="confirmarEmail" value={confirmarEmail} onChange={configEmail} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">Documento</label>
                            <input type="number" className="form-control" name="dni" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero telefonico</label>
                            <input type="number" className="form-control" name="celular"  required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" required />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>Finalizar compra</button>
                    </form>
                </div>
            }
        </>
    )
}




