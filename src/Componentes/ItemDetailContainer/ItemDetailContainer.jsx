import React  from 'react';
import { useEffect,useState } from 'react';
import { consultarBDD } from '../../utils/funciones';
import { ItemDetail } from '../ItemDetail/ItemDetail';
export const ItemDetailContainer = () => {

    const [producto,setProducto] = useState([])

    useEffect(()=>{
        consultarBDD('../json/productos.json').then(prods => {
            const prod = prods.find(item => item.id === 3)
            setProducto(prod)
        })

    },[])
    return (
        <div>
            <ItemDetail prods ={producto} />
        </div>
    );
}


