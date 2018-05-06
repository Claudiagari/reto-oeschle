import React, { Component } from 'react';
import Card from './Card'
import '../styles/board.css';

class Board extends Component {
  render() {
    return (
      <div className="board">
        {
          this.props.casino.map((card, index) => {
            const isBeingCompared = this.props.coupleSelected.indexOf(card) > -1;
            return <Card
              key={index}
              image={card.image}
              isBeingCompared={isBeingCompared}
              cardSelected={() => this.props.cardSelected(card)}
              itWasGuessed={card.itWasGuessed}
            />
          })
        }
      </div>
    );
  }
}

export default Board;
