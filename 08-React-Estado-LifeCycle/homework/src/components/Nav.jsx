import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <div className='container'>
      <div className='izq'>
      <img src={Logo} alt="img not fount" className='img' />
      <span className='text'>Henry Weather App</span>
      </div>
      <div className='derch'>
      <SearchBar onSearch={onSearch}/>
      </div>
    </div>

  );
};

export default Nav;
