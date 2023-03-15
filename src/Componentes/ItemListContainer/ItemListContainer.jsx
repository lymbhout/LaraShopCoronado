import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getProductos } from '../../utils/firebase.js';
import {ItemList} from '../ItemList/ItemList.jsx';
export const ItemListContainer = () => {
    const {idCategoria} = useParams()
    const [productos,setproductos] = useState([])
    useEffect(()=>{
        if(idCategoria){
            getProductos().then(prod =>{
                const produc = prod.filter(prod => prod.stock > 0).filter(productos => productos.idCategoria === idCategoria)
                const item = <ItemList produc={produc} plantilla='item'/>
                setproductos(item)
            })
            
        }else{
            getProductos().then(produc =>{
                const prods = produc.filter(prod => prod.stock > 0)
                const item =<ItemList produc={produc} plantilla='item'/>
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


