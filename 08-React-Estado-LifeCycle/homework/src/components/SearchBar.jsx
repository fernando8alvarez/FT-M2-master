import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
 
  const [city, setCity]= useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }} className='franjaB'>
      <input
        type="text"
        placeholder="    Ingrese la ciudad..."
        className='barraB'
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" className='btns'/>
    </form>
  );
  }
