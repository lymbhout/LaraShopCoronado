import React from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones.js';
import {ItemList} from '../ItemList/ItemList.jsx';
export const ItemListContainer = () => {
    
    const [productos,setproductos] = useState([])

    useEffect(()=>{
        consultarBDD('./json/productos.json').then(produc =>{
            const item = ItemList({produc})
            setproductos(item)
        })
    },[])
    return (
        <>
        {productos}
        </>
    );
}


