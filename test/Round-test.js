const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const deck = new Deck([card1]);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be have a deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck.cards);
  });

  it('should be have know what card is has', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });

  it('should be able to take a turn', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turnCount).to.equal(0);
    round.takeTurn();
    expect(round.turnCount).to.equal(1);
  });

  it('should be able to tell if the guess made on the turn is correct', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('guess')).to.equal('Incorrect!');
    expect(round.takeTurn('object')).to.equal('Correct!');
  });

  it('should be able to move to the next card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('object');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should keep track of your wrong awnsers', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What is my name?', ['slim shady', 'sponge bob', 'gary'], 'slim shady')
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('object');
    expect(round.incorrectGuesses.length).to.equal(0)
    round.takeTurn('gary');
    expect(round.incorrectGuesses.length).to.equal(1)
  });

  it('should be able to tell you how often you were wrong', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What is my name?', ['slim shady', 'sponge bob', 'gary'], 'slim shady')
    const card3 = new Card(3, 'What is my favorite color?', ['black', 'gold', 'silver'], 'gold')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('gary');
    round.takeTurn('gold');
    expect(round.calculatePercentCorrect()).to.equal('66%');
  });

  it('should be able to tell you how often you were wrong', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card(2, 'What is my name?', ['slim shady', 'sponge bob', 'gary'], 'slim shady')
    const card3 = new Card(3, 'What is my favorite color?', ['black', 'gold', 'silver'], 'gold')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('gary');
    round.takeTurn('gold');
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()} of the questions correctly!`);
  });

});
