const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null
    this.deck = this.createDeck()
  }

  createDeck() {
    // let cards = prototypeQuestions.map(card => card = new Card(card))
    let cards = prototypeQuestions.map(card => {
      card = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return card;
    })
    let deck = new Deck(cards)
    return deck
  }

  start() {
    this.currentRound = new Round(this.deck)
    this.printMessage(this.currentRound.deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
