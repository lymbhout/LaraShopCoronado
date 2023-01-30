import React from 'react';

export const Search = () => {
    return (

<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="bi bi-search"></i>
  </button>
  <ul class="dropdown-menu border-0 ">
            <form className="d-flex" role="search">
              <input className="btn btn-outline-secondary rounded-0 m-1" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary rounded-0 m-1 " type="submit">Search</button>
            </form>
  </ul>
</div>
    );
}
