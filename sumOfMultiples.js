//P 
  //Given a natural number, and a set of one or more other numbers, find the
  //sum of all multiples of the numbers in the set that are less than the first
  // number.
  //If no set of numbers are given, use a defaul set of 3 and 5
//E
  //create `SumOfMultiples` class that has a constructor, `to()` static method, and `to()` instance method
    // constructor saves arguments as set of numbers to get multiples for
      // if no arguments are provided, default set of numbers are 3 and 5
    // `to()` instance method
      // takes a number to stop before
      // returns sum of all the multiples of the numbers in the set saved to the instance that are less than the argument number
    // `to()` static method
      // returns new SumofMultplies.to(arg);
//D
  //save set of numbers into an array
//A
// constructor
    //takes set of numbers and saves them in an array
    //if no arguments are provided, save [3, 5]
  // `to()` instance method takes argument `upTo`
    // initialize variabl `sum` = 0;
    // initialize variable `currentNum` to begin at minimum of the numberSet
    // while `currentNum` < `upTo` 
      //if `currentNum` % any of the numbers of the set === 0,
      // sum += `currentNum`
      // `currentNum` += 1;
    // return sum
  // `to()` static method
    // return new `SumOfMultitples().to()`
//C

class SumOfMultiples {
  constructor(num1, num2 ) {
    if (!num1) {
      this.numberSet = [3,5];
    } else {
      this.numberSet = [...arguments];
    }
  }

  to(upTo) {
    let sum = 0;
    let currentNum = Math.min(...this.numberSet);
    for (currentNum; currentNum < upTo; currentNum += 1) {
      if (this.numberSet.some(num => currentNum % num === 0)) {
        sum += currentNum;
      }
    }
    return sum;
  }
  static to(upTo) {
    return new SumOfMultiples().to(upTo);
  }
}

module.exports = SumOfMultiples;