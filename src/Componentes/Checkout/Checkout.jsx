import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
export const Checkout = () => {
    const Navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e)=>{
        e.preventDefault()
        console.log(datosForm.current);
        const data = new FormData(datosForm.current)
        console.log(data);
        const cliente =Object.fromEntries(data)
        console.log(cliente);
        e.target.reset()
        toast.success('Muchas gracias por comprar en LaraShop!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        Navigate('/')
    }
    return (
        <div className='container contForm'>
            <form onSubmit={consultarForm} ref={datosForm}>
                <div className='mb-3'>
                    <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                    <input type="text" className='form-control' name='nombre' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Correo</label>
                    <input type="email" className='form-control' name='email' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="documento" className='form-label'>Documento</label>
                    <input type="number" className='form-control' name='documento' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="celualar" className='form-label'>Numero Telefonico</label>
                    <input type="number" className='form-control' name='celular' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="direccion" className='form-label'>Direccion(completa)</label>
                    <input type="text" className='form-control' name='direccion' />
                </div>
                <button type='submit' className='btn btn-primary'>Finalizar Compra</button>
            </form>
        </div>
    );
}


