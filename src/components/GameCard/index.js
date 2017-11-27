import React from 'react';
import formatMoney from '../../lib/formatMoney';
import './style.css';

const GameCard = ({id, name, price, score, image}) => {
  return (
    <div className="GameCard">
      <figure className="GameCard-figure">
        <img className="GameCard-image" src={`images/${image}`}/>
      </figure>
      <div className="GameCard-info">
        <p className="GameCard-title">{name}</p>
        <p className="GameCard-price">{formatMoney(price)}</p>
      </div>
      <div className="GameCard-cta">
        <p>adicionar ao carrinho</p>
      </div>
    </div>
  );
};

export default GameCard;
