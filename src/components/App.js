import React, { Component } from 'react';
import Header from './Header'
import Board from './Board'
import buildCasino from '../utils/buildCasino'

const getStateInitial = () => {
  const casino = buildCasino();
  return {
    casino,
    coupleSelected: [],
    isComparing: false,
    numberOfAttemps : 0
    
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = getStateInitial()
  }
  render() {
    return (
      <div>
        <Header 
        numberOfAttemps = {this.state.numberOfAttemps}
        resetGame = {() => this.resetGame()}
        />
        <Board
          casino={this.state.casino}
          coupleSelected={this.state.coupleSelected}
          cardSelected={(card) => this.cardSelected(card)}
        />
      </div>
    );
  }
  cardSelected(card) {

    if (this.state.isComparing || this.state.coupleSelected.indexOf(card) > -1 || card.itWasGuessed) {
      return;
    }
    const coupleSelected = [...this.state.coupleSelected, card];
    this.setState({
      coupleSelected
    })

    if (coupleSelected.length === 2) {
      this.compareCouple(coupleSelected)
    }
  }
  compareCouple(coupleSelected) {
    this.setState({ isComparing: true });
    setTimeout(() => {
      const [firstCard, secondCard] = coupleSelected;
      let casino = this.state.casino;
      if (firstCard.image === secondCard.image) {
        casino = casino.map((card) => {
          if (card.image !== firstCard.image) {
            return card
          }
          return { ...card, itWasGuessed: true ,hidden:true}
        })
      }
      this.checkWinner(casino);
      this.setState({
        coupleSelected: [],
        casino,
        isComparing: false,
        numberOfAttemps: this.state.numberOfAttemps + 1
        
      })
    }, 1000)
  }
 checkWinner(casino){
   if (casino.filter((card) => !card.itWasGuessed).length === 0){
      alert(`Juego terminado en ${this.state.numberOfAttemps} intentos`)
   }
 }
 resetGame(){
   this.setState(
     getStateInitial()
   );
 }
}
export default App;
