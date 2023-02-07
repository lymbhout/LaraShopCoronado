import React from 'react';
import {Item} from '../Item/Item.jsx'

export const ItemList = ({produc}) => {
    console.log(produc);
    return (
        <>
            {produc.map(producto => <Item item={producto}/>)}
        </>
    );
}


