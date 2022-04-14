/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== '');
    this.makeChains();
  }

  /** set markov chains:
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  makeChains() {
    const chain = {};
    let words = this.words;

    // For each word, loop through each unique word and collect the nextWord that comes after it.
    for (let i = 0; i < words.length; i++) {
      let nextWord = words[i + 1] || null;
      if (words[i] in chain) {
        // if word exists in chain, push nextWord to the array.
        chain[words[i]].push(nextWord);
      } else {
        // if the current word is not in the chain yet, create a new array object with key/value pair.
        chain[words[i]] = [nextWord];
      }
    }
    return chain;
  }

  /** Pick a random number for following word from array
   * based on its index in the array
   */
  static randomChoice(max) {
    return parseInt(Math.random() * max);
  }

  /** Return random text from chains
   * find all words that can come after that word
   * pick one of those next-words randomly
   * if we picked null, we’ve reached the end of the chain, so stop
   * otherwise, restart at step 1
   */
  makeText(numWords = 100) {
    // pick a random key to begin
    const chain = this.makeChains(); // method returns an array of a given object's own enumerable property names
    let word = this.words[MarkovMachine.randomChoice(this.words.length)]; // selects a random word from the array of keys
    let outputString = `${word} `; // initializes output including the random word

    // Get mapped words at random
    // produce markov chain until reaching termination word
    for (let i = 1; i < numWords; i++) {
      word = chain[word][MarkovMachine.randomChoice(chain[word].length)];
      if (word) {
        outputString += `${word} `;
      } else {
        return MarkovMachine.prettifyOutput(outputString);
      }
    }
    return MarkovMachine.prettifyOutput(outputString);
  }

  static prettifyOutput(str) {
    // capitalize first letter
    let prettyStr = str[0].toUpperCase();
    // add the rest of the string WITHOUT the trailing space
    prettyStr += str.slice(1, str.length);
    // add a period at the end of the "sentence"
    prettyStr += '.';
    return prettyStr;
  }
}

// let mm = new MarkovMachine('the cat in the hat is in the hat');

// console.log(mm.makeChains());
// console.log(mm.makeText());

module.exports = {
  MarkovMachine
};
