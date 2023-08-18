import React, { useState } from 'react';
import Card from './Card';
import './Formulario.css';

function Formulario() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim().length < 3 || autor.trim().length < 6) {
      setErrorMessage('Corrobora la información que sea correcta');
    } else {
      setShowCard(true);
      setErrorMessage('');
    }
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título del libro"
        />
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Autor del libro"
        />
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showCard && <Card titulo={titulo} autor={autor} />}
    </div>
  );
}

export default Formulario;