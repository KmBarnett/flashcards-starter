const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turnCount];
  }

  takeTurn(guess) {
    let card = this.returnCurrentCard();
    let turn = new Turn(guess, card);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }
    this.turnCount++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let allQuestions = this.deck.length
    let correct = allQuestions - this.incorrectGuesses.length;
    return `${Math.trunc((correct / allQuestions) * 100)}%`
  }

  endRound() {
     return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }

}

module.exports = Round
