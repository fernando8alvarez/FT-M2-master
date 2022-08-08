import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  <div>
    <input type="text" placeholder="Ingrese la ciudad..."/>
    <button onClick={()=>onSearch('Buscando...')}>Agregar</button>
  </div>
  );
};