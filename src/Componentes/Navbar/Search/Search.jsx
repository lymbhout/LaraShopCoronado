import React from 'react';
import '../../../CSS/Search.css'
export const Search = () => {
    return (

<div className="btn-group dropstart">
  <button type="button" className="btn btn-secondary dropdown" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-search"></i>
  </button>
  <ul className="dropdown-menu medida border-0 bg-transparent ">
            <form className="d-flex" role="search">
              <input className="btn btn-outline-secondary rounded-0 m-1 shadow-lg p-3 mb-5 border-0 large " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary rounded-0 m-1 shadow-lg p-3 mb-5 border-0" type="submit">Search</button>
            </form>
  </ul >
</div >
    );
}
