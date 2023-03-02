import React from 'react';
import {Item} from '../Item/Item.jsx'
import { ItemCart } from '../ItemCart/ItemCart.jsx';
export const ItemList = ({produc,plantilla}) => { 
    return (
    <>
        {
            plantilla === "item"
            ?
            produc.map(producto => <Item item={producto} key = {producto.id}/>)
            :
            produc.map(producto => <ItemCart item={producto} key = {producto.id}/>)
        }
    </>
    );
}


