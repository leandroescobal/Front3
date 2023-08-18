import React from 'react';

function Card({ titulo, autor }) {
  return (
    <div className="card">
      <p>Título del libro: {titulo}</p>
      <p>Autor del libro: {autor}</p>
    </div>
  );
}

export default Card;