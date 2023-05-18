import React from 'react';
// spinners
import BarLoader from "react-spinners/BarLoader";
// estados
import { useState,useEffect } from 'react';
import '../App.css'
export const Loanding = ({productosImg}) => {
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
  
      },3500)
    },[])
    return (
        <div>
        {
        loading
        ?
        <BarLoader className='centradoPerfecto mx-auto'
        color={'#000000'}
        loading={loading}
        size={150}
        width={300}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      productosImg
        }
        </div>
    );
}


