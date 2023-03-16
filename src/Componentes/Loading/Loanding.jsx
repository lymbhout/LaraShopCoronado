import React from 'react';
import '../../CSS/Loanding.css'
import { documentoDeCambioLoad } from '../../utils/loanding';
export const Loanding = () => {
    documentoDeCambioLoad()
    return (
        <>
            <img src="./video/LaraShop.gif" alt="" className='loading loading--show' />
        </>
    );
}


