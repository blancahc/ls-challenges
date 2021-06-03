//P
  // Compute the scrabble score for a word
  // A, E, I, O, U, L, N, R, S, T	>1
  // D, G	>2
  // B, C, M, P	>3
  // F, H, V, W, Y	>4
  // K	>5
  // J, X	>8
  // Q, Z	>10
  // Input: string
  // Output: number
//E
  // create a class `Scrabble`
    // Constructor
      // take a string as an argument representing a word.
      // saves the lowercase word
    // `score()` instance method
      // returns the sum of each letter of the `Scrabble` instance word
      // nil scores zero and white space scores zero
    // `score()` static method
      // takes a word argument
      // returns the score for the word
//D
 // input is a string
 // output is a number
 // will save the letter values in an object
//A
  // create a `Scrabble` class
  // constructor
    // save word argument to lowercase
  // create static LETTER_VALUES object
  // `score()` method
    // initialize score = 0;
    // iterates word and adds its value to score
      // iterate LETTER_VALUES, if letter is in the key
        // score += key
    //return score
//C

class Scrabble {
  constructor(word) {
    if (word) {
      this.word = word.toLowerCase();
    }
  }
  static LETTER_VALUES = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'z'],
  }
  score() {
    let score = 0;
    if (this.word) {
      this.word.split('').forEach(letter => {
        score += this._getValue(letter);
      });
    }
    return score;
  }
  static score(word) {
    return new Scrabble(word).score();
  }
  _getValue(letter) {
    let value = 0;
    Object.keys(Scrabble.LETTER_VALUES).forEach(key => {
      if (Scrabble.LETTER_VALUES[key].includes(letter)) {
        value = key;
      }
    });
    return Number(value);
  }
}
module.exports = Scrabble