const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be an instance of Round', function() {
    const game = new Game([]);
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    const game = new Game([]);
    game.start()
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });

  it('should have a cards', function() {
    const game = new Game([]);
    game.start()
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });

});
