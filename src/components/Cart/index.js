import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../actions';
import CartItem from '../CartItem';
import cart from '../../images/cart.svg';
import './style.css';

const renderItemCounter = itemCount => itemCount === 1 ? '1 item' : `${itemCount} itens`;

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0,
      shipping: 0,
      total: 0,
    };

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    const { removeItem, cart } = this.props;
    const itemToRemove = cart.find(item => item.id === id);
    removeItem(itemToRemove);
  }
  render() {
    return (
      <aside className="Cart">
        <div className="Cart-container">
        <h3 className="Cart-title">
          Carrinho
          {
            this.props.cart.length > 0 &&
            <span className="Cart-itemCounter">({renderItemCounter(this.props.cart.length)})</span>
          }
        </h3>
          {
            this.props.cart.length === 0 &&
            <div className="Cart-empty">
              <img src={cart} alt="Carrinho vazio" />
              <p> Até o momento, <br /> o seu carrinho está vazio </p>
            </div>
          }
          {
            this.props.cart.length > 0 &&
            <div className="Cart-content">
              { this.props.cart.map(item => <CartItem {...item} onRemove={this.handleRemove} />) }
            </div>
          }
        </div>
      </aside>
    );
  }
}

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps, { removeItem })(Card);
