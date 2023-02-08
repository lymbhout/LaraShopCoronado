import React from 'react';
import {Item} from '../Item/Item.jsx'

export const ItemList = ({produc}) => { 
    return (
        <>
            {produc.map(producto => <Item item={producto} key = {producto.id}/>)}
        </>
    );
}


