import React from 'react';
import { useState } from 'react';
export const ItemCount = ({valorInicial,stock}) => {

    const [contador,setcontador] = useState(valorInicial)

    const sumar =()=> contador < stock && setcontador(contador+1)
    const restar = ()=>contador > valorInicial && setcontador(contador-1)
    return (
        <div>
            <button className='btn btn-dark' onClick={() =>restar()}>-</button>
            {contador}
            <button className='btn btn-dark' onClick={() =>sumar()}>+</button>
        </div>
    );
}
