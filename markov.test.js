const { MarkovMachine } = require('./markov');

describe('markov tests', () => {
  // definitions for use in all Markov Machine tests
  let chain;
  let mm;

  // setup
  beforeEach(() => {
    mm = new MarkovMachine('the cat in the hat');
    chain = {
      the: ['cat', 'hat'],
      cat: ['in'],
      in: ['the'],
      hat: [null]
    };
  });

  // teardown
  afterEach(() => {
    text = '';
    chain = {};
  });

  test('makeChains function', () => {
    expect(mm.makeChains()).toEqual({
      the: ['cat', 'hat'],
      cat: ['in'],
      in: ['the'],
      hat: [null]
    });
  });

  test('machine returns a string', () => {
    let output = mm.makeText();
    expect(typeof output).toEqual('string');
  });

  test('return ends with last word of input', function () {
    let output = mm.makeText();
    expect(output.startsWith('The')).toBe(true);
    expect(output.endsWith('.')).toBe(true);
  });

  test('inputting sample text should output expected chain', () => {
    const test = mm.makeChains();
    expect(test).toEqual(chain);
  });

  test('prettifyOutput function', () => {
    let out = MarkovMachine.prettifyOutput('i like green eggs and ham');
    expect(out).toEqual('I like green eggs and ham.');
  });
});
