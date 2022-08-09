import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  <div className={s.franjaB}>
    <input type="text" placeholder="   Ingrese la ciudad..." className={s.barraB}/>
    <button onClick={()=>onSearch('Buscando...')} className={`${s.btn} ${s.btn2} `}>Agregar</button>
  </div>
  );
};