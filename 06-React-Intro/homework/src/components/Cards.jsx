import React from 'react';
import Card from './Card.jsx'

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map

  //cities = [Londres, Cairns, Denver]; ---> viene de app que asu vez viene de data
  return (
    <div>{cities.map((city) => {
      return <Card
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
        key={city.name}
      />;
    })}

    </div>
  )
};