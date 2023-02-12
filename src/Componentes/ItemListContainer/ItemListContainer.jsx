import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones.js';
import {ItemList} from '../ItemList/ItemList.jsx';
export const ItemListContainer = () => {
    const {idCategoria} = useParams()
    const [productos,setproductos] = useState([])
    useEffect(()=>{
        if(idCategoria){
            consultarBDD('../json/productos.json').then(prod =>{
                const produc = prod.filter(productos => productos.idCategoria === parseInt(idCategoria))
                const item = ItemList({produc})
                setproductos(item)
            })
            
        }else{
            consultarBDD('./json/productos.json').then(produc =>{
                const item = ItemList({produc})
                setproductos(item)
            })
        }
    },[idCategoria])
    return (
        <div className='row '>
            {productos}
        </div>
    );
}


