//P
  //Take a letter and output a diamond shape string
  //The first row contains one 'A'.
  //The last row contains one 'A'.
  //All rows, except the first and last, have exactly two identical letters.
  //The diamond is horizontally symmetric.
  //The diamond is vertically symmetric.
  //The diamond has a square shape (width equals height).
  //The letters form a diamond shape.
  //The top half has the letters in ascending order.
  //The bottom half has the letters in descending order.
  //The four corners (containing the spaces) are triangles.
//E
  //Diamond class has `makeDiamond` static method
  //`makeDiamond` takes a capital letter. 
  //returns a diamond of letters starting with letter `A` and ascending to the argument letter
//D
  //strings
  //array to reverse beginningString to get endingString
  //save letters in an array (could also use charCodeAt, but I think this is better)
//A
  //save letters in an array
  //`makeDiamond()`
    // take a capital letter as argument
    // create the beggining string
      //let outerspace = argumentLetterNumber;
      //let innerspace = 1; 
      //first row is outerpace + 'A' + outerspace\n
      //outerspace -=1;
      //for each row after (1 up to argumentletterIndex)
        //outerspace -=1;
        // outerspace,letter,innerspace,letter,outerspace\n
        //innerspace +=2;
    // create the ending string
      //ending string is the reverse of the beginning string
    //return beginning string + middle string + ending string
//C


class Diamond {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    if (letter === "A") {
      return "A\n";
    }
    let beginning = Diamond._createBeg(letter);
    let ending = Diamond._createEnd(letter);
    return beginning + ending;
  }
  static _createBeg(letter) {     
    let outerspace = Diamond.LETTERS.indexOf(letter);
    let innerspace = 1;
    let str = ' '.repeat(outerspace) + 'A' + ' '.repeat(outerspace) + '\n';
    for(let row = 1; row < Diamond.LETTERS.indexOf(letter) + 1; row += 1) {
      outerspace -= 1;
      let letter = Diamond.LETTERS[row]
      str += ' '.repeat(outerspace) + letter + ' '.repeat(innerspace) + letter + ' '.repeat(outerspace) + '\n';
      innerspace += 2;
    }
    return str;
  }

  static _createEnd(letter) {
    let index = Diamond.LETTERS.indexOf(letter);
    let outerspace = 1;
    let innerspace = 1 + (2*(index-2));
    let str = '';
    for(let row = index ; row > 1; row -= 1) {
        innerspace = Math.abs(innerspace);
        let letter = Diamond.LETTERS[row - 1]
        str += ' '.repeat(outerspace) + letter + ' '.repeat(innerspace) + letter + ' '.repeat(outerspace) + '\n';
        innerspace -= 2;
        outerspace += 1;
      }
      str += ' '.repeat(outerspace) + 'A' + ' '.repeat(outerspace) + '\n';
      return str;
  }
}

module.exports = Diamond;