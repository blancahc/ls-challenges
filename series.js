//P
  //Given a string of digits, return all the possible consecutive number series
  //of a specified length in that string
  // "01234" has the following 3-digit series:
    // 012
    // 123
    // 234
  // 4-digit series:
    // 0123
    // 1234
  //If you ask for a digit larger than the given string, throw an error
//E
  //`Series` class
    // constructor
      // takes string of digits
    // `slices()`
      //takes a number representing the length of new series
      //raises error if desired length is greater than length of string
      // returns an array with subArrays of desired series length
//D
  // input is a string
  // output is an array of arrays
//A
  // constructor
    //take a string of digits as an argument and save it to the instance of `Series`
  //slices method
    //takes an argument: number representing the desired length of series
    // if desiredLength > string
      //throw an error
    //declare a variable `result` = [];
    //loop through the saved string
      //starting idx =0, up to str.length - desiredLength + 1, increment idx by 1
      // take a slice of the string starting with index, idx + seriesLength
      // push that in the form of an array to the result
    //return `result` array
//C

class Series {
  constructor(string) {
    this.string = string;
  }
  slices(desiredLength) {
    let result = [];
    if (desiredLength > this.string.length) {
      throw new Error("desired length is greater than the string length");
    }
    for (let idx = 0; idx <= this.string.length - desiredLength; idx += 1) {
      let subArr = this.string.slice(idx, idx + desiredLength).split('');
      let slice = subArr.map(char => Number(char));
      result.push(slice);
    }
    return result;
  }
}

module.exports = Series;