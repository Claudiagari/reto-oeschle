import React, { Component } from 'react';
import Flipcard from "react-flipcard";
import '../styles/card.css';

class Card extends Component {
  render() {
    const toggleVisible = this.props.itWasGuessed ? 'hidden' : 'visible';
    let style = {
      visibility: toggleVisible
    };
    return (
      <div className="card" onClick = {this.props.cardSelected}>
        <Flipcard
          flipped={this.props.isBeingCompared || this.props.itWasGuessed}
          disabled={true}
        >
          <div className="front"></div>
          <div className="content">
            <img style={style} className="image-card" src={this.props.image} alt="card" />
          </div>
        </Flipcard>
      </div>
    );
  }
}
export default Card;
