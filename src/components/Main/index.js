import React from 'react';
import GameCard from '../GameCard';
import data from '../../data/mock.json';
import './style.css';


const Main = () => {
  return (
    <main className="Main">
      <nav className="Main-nav">
        <h1 className="Main-title">Games</h1>
        <select className="Main-select">
          <option value="price">Filtrar por preço</option>
          <option value="score">Filtrar por popularidade</option>
          <option value="name">Filtrar por ordem alfabética</option>
        </select>
      </nav>
      <div className="Main-cards">
        { data.map(item => <GameCard {...item} />) }
      </div>
    </main>
  );
};

export default Main;
