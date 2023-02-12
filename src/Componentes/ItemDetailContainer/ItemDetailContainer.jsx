import React  from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones.js';
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto,setProducto] = useState([])

    useEffect(()=>{
        consultarBDD('../json/productos.json').then(prods => {
            const prod = prods.find(item => item.id === parseInt(id))
            setProducto(prod)
        })
    },[])
    return (
        <div className='card mb-3 container'>
            <ItemDetail prods={producto} />
        </div>
    );
}

