import React, { Component } from 'react';
import GameCard from '../GameCard';
import data from '../../data/mock.json';
import './style.css';

const reorderCards = (cards, criteria) => cards.sort((a, b) => a[criteria] >= b[criteria]);

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: reorderCards(data, 'price'),
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    const criteria = e.target.value;

    this.setState({
      cards: reorderCards(this.state.cards, criteria),
    });
  }
  render() {
    return (
      <main className="Main">
        <nav className="Main-nav">
          <h1 className="Main-title">Games</h1>
          <select className="Main-select" onChange={this.handleSelectChange}>
            <option value="price">Filtrar por preço</option>
            <option value="score">Filtrar por popularidade</option>
            <option value="name">Filtrar por ordem alfabética</option>
          </select>
        </nav>
        <div className="Main-cards">
          { this.state.cards.map(item => <GameCard {...item} />) }
        </div>
    </main>
    );
  }
}

export default Main;
