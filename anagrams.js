//P
  // Anagrams are created by rearranging the letters of the original word
  // It is case-insensitive
//E
  //create a class `Anagram`
    //has constructor that takes a word and saves it
      //does not throw any errors
    //has `match()` that takes an array of words and returns an array with the word(s)
    //that are anagrams of the original word
      //case insensitive
      //exact word is not an anagram
//D 
  // input is a string
  // output is an array of string(s) or empty array
//A
  // create a class `Anagram`
    // Constructor
      // takes a string representing a string
      // save it to instance of `Anagram` class
    // match()
     // takes an array of different words (can be empty or only have one word)
     // initialize anagrams array
     // saves original word as sorted word to lowercase
     // iterate through array argument
      // at each iteration check if the original word to lowercase is the same as
      // as the word being iterated to lowercase
        //if not, then sort it and compare it to the sorted word to lowercase 
          //if the same, then push it to the anagrams array.
      // return the anagrams array
//C

class Anagram {
  constructor(originalWord) {
    this.originalWord = originalWord;
  }
  match(words) {
    let anagrams = [];
    let sortedWord = this.originalWord.toLowerCase().split('').sort().join('');
    words.forEach(word => {
      if (this.originalWord.toLowerCase() !== word.toLowerCase()) {
        if (word.toLowerCase().split('').sort().join('') === sortedWord) {
          anagrams.push(word);
        }
      }
    });
    return anagrams;
  }
}

module.exports = Anagram