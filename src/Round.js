const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.discardPile = [];
    this.start = Date.now()
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    let card = this.returnCurrentCard();
    this.deck.cards.shift();
    let turn = new Turn(guess, card);
    let cardDestination = (turn.evaluateGuess() ? this.discardPile : this.deck.cards)
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }
    cardDestination.push(card)
    this.turnCount++;
    return turn.giveFeedback();
  }

  caculateTimeTaken() {
    var startTime = this.start;
    var endTime = Date.now();
    var totalTime = endTime - startTime
    var minutes = Math.floor(totalTime / 60000);
  var seconds = Math.floor(((totalTime % 60000) / 1000));
    return `It took you ${minutes} minutes and ${seconds} seconds`
  }

  calculatePercentCorrect() {
    let allQuestions = this.turnCount
    let correct = allQuestions - this.incorrectGuesses.length;
    return `${Math.trunc((correct / allQuestions) * 100)}%`
  }

  writeEndMessage() {
    let repeated = this.turnCount + this.discardPile.length
    return `You answered ${this.calculatePercentCorrect()} correctly out of ${this.turnCount} total questions awnsered. There were ${this.discardPile.length} cards in this deck you repeated ${repeated}. ${this.caculateTimeTaken()}`
  }

  endRound() {
    let score = ` ${this.writeEndMessage()}`;
    console.log(score);
    return score;
  }

}

module.exports = Round
