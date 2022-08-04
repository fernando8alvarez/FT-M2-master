import React from 'react';

export default function Other({ match, Ejemplo }) {
  console.log(match, Ejemplo);
  return (
    <div>
      <h2>Parameter: {match.params.paramOne}</h2>
    </div>
  );
};
  