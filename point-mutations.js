//P - Write a program that can calculate the Hamming distance between two DNA strands
  // Count the number of differences between two strings
  // If you have two strings of different lengths you stop counting at the shorter string 
//E - Create a DNA class that takes a 'string' in the constructor representing a DNA, 
      // It has a `hammingDistance()` method that takes a string "DNA" to compare
        // Compares two strings and returns the number of differences between them
        // returns a number representing the Hamming distance
        // if both strings are empty or identical it returns zero
        // does not mutate the original strings
        
//D - Convert strings to arrays to compare them
//A - create a class "DNA"
  // Construstor takes a string representing a DNA
      // this.dna = argument
  // hammingDistance() method takes a givenDna argument
    // converts givenDNA and this.dna to arrays
    // initializes a `count` var to 0.
    // It iterates both arrays until the end of the shortest "dna array" is reached
    // At each iteration, it increases count if the characters are different
    // It returns `count`
//C
class DNA {
  constructor(dna) {
    this.dna = dna;
  }
  hammingDistance(givenDna) {
    let dnaArr = this.dna.split('');
    let givenDnaArr = givenDna.split('');
    let count = 0;
    for (let index = 0; index < dnaArr.length && index < givenDnaArr.length; index += 1) {
      if (dnaArr[index] !== givenDnaArr[index]) {
        count +=1;
      }
    }
    return count;
  }
}

module.exports = DNA