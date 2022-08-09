import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
  <div className={s.card}>
    <button onClick={onClose} className={`${s.btn} ${s.btn2} ${s.btn3}`}>X</button>
    <h2 className={s.city}>{name}</h2>
    <div className={s.info}>
      <div>
      <h6>Min</h6>
      <p>{min}</p>
      </div>

      <div>
      <h6>Max</h6>
      <p>{max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" className={s.img} />
    </div>
  </div>
  )};