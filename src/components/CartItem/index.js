import React from 'react';
import formatMoney from '../../lib/formatMoney';
import './style.css';


const CartItem = ({
  id, name, price, score, image, onRemove,
}) => (
  <div className="CartItem">
    <figure className="CartItem-figure">
      <img className="CartItem-image" src={`images/${image}`} />
    </figure>
    <div className="CartItem-info">
      <p className="CartItem-name">{name}</p>
      <p className="CartItem-price">{formatMoney(price)}</p>
    </div>
    <button className="CartItem-delete" onClick={() => onRemove(id)}>x</button>
  </div>
);

export default CartItem;
