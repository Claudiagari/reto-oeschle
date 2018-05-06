import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col 12">
            <h1 className="title"> Juego de Memoria</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col 12">
            <h2 className="title"> Intentos: {this.props.numberOfAttemps}</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col 12">
            <button type="button" className="btn btn-dark" onClick={this.props.resetGame}>Reiniciar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
