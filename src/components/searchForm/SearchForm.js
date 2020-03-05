import React from 'react';
import './SearchForm.css';

function SearchForm(){
return (
    <div className="search-form">
      <label>Rechercher</label>
      <input type="text" placeholder="Mot clé ..."/>
      <button >Valider</button>
    </div>
);
}

export default SearchForm ;