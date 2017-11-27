import React from 'react';
import './style.css';

const Main = () => {
  return (
    <main className="Main">
      <h1 className="Main-title">Games</h1>
      <select className="Main-select">
        <option value="price">Filtrar por preço</option>
        <option value="score">Filtrar por popularidade</option>
        <option value="name">Filtrar por ordem alfabética</option>
      </select>
    </main>
  );
};

export default Main;
