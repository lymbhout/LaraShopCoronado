
import React from 'react';
import { useState } from 'react';
export const ItemCount = ({valorInicial,stock,onAdd}) => {

    const [contador,setcontador] = useState(valorInicial)

    const sumar =()=> contador < stock && setcontador(contador+1)
    const restar = ()=>contador > valorInicial && setcontador(contador-1)
    return (
        <div>
            <button className='btn btn-light rounded-0 ' onClick={() =>restar()}>-</button>
            {contador}
            <button className='btn btn-light rounded-0' onClick={() =>sumar()}>+</button>
            <button className='btn btn-light rounded-0' onClick={()=> onAdd(contador)}>Comprar ahora</button>
        </div>
    );
}
