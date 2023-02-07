import React from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones.js';
const ItemListContainer = () => {
    
    const [productos,setproductos] = useState([])

    useEffect(()=>{
        consultarBDD('./json/productos.json').then(props => console.log(props))
    })
    return (
        <>


        </>
    );
}

export default ItemListContainer;
