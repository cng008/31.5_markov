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

    // For each word, set the word to the next word || words || null in the map / chain
    for (let i = 0; i < words.length; i++) {
      let nextWord = words[i + 1] || null;
      if (words[i] in chain) {
        chain[words[i]].push(nextWord);
      } else {
        chain[words[i]] = [nextWord];
      }
    }
    return chain;
  }

  // find all words that can come after that word
  // pick one of those next-words randomly
  // if we picked null, we’ve reached the end of the chain, so stop
  // otherwise, restart at step 1

  /** Pick a random number for following word from array */
  static randomInt(max) {
    return parseInt(Math.random() * max);
  }

  /** return random text from chains */
  makeText(numWords = 100) {
    // pick a random key to begin
    const chain = this.makeChains();
    let word = this.words[MarkovMachine.randomInt(this.words.length)];
    let outputString = `${word} `;

    // Get mapped words at random
    // produce markov chain until reaching termination word
    for (let i = 1; i < numWords; i++) {
      word = chain[word][MarkovMachine.randomInt(chain[word].length)];
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
    prettyStr += str.slice(1, str.length - 1);
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
