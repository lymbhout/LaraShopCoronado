import React from 'react';

export const Search = () => {
    return (

<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="bi bi-search"></i>
  </button>
  <ul class="dropdown-menu">
            <form className="d-flex" role="search">
              <input className="btn btn-outline-secondary " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
  </ul>
</div>
    );
}
