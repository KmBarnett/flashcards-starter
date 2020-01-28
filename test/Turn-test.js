const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to take a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.guess).to.equal('guess');
  });

  it('should have a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.card).to.equal(card);
  });

  it('should have a return guess function', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.returnGuess).to.be.a('function');
  });

  it('returnGuess function should return turn guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should have a return card function', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.returnCard).to.be.a('function');
  });

  it('returnCard function should return turn card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a evaluate guess function', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.evaluateGuess).to.be.a('function');
  });

  it('evaluateGuess function should return turn card correct answer that can be true/false', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.evaluateGuess()).to.equal(false);
    const turn2 = new Turn('object', card);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a give feeback function', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.giveFeedback).to.be.a('function');
  });

  it('give feedback function should return diffrent feedback if the answer true or false', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('guess', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
    const turn2 = new Turn('object', card);
    expect(turn2.giveFeedback()).to.equal('Correct!');
  });

});
