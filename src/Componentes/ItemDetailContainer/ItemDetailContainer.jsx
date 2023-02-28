import React  from 'react';
import { useEffect,useState } from 'react';
import { getProducto } from '../../utils/firebase.js';
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto,setProducto] = useState([])

    useEffect(()=>{
        getProducto(id).then(prods => {
            setProducto(prods)
        })
    },[])
    return (
        <>
            <ItemDetail prods={producto} />
        </>
    );
}

