import React from 'react';

export const Secciones = React.memo(() => {
    return (
      <>
        <li className="nav-item">
        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <button  className='border-0 shadow-lg bg-white'><a className="nav-link  " href="#">Blog</a></button>
        </li>
        <li className="nav-item">
          <button className='border-0 shadow-lg bg-white'><a className="nav-link  " href="#">Link</a></button>
        </li>
      </>
    );
})


