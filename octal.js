//P
  // Input is a string representing an octal
  // return a decimal output
  // Invalid number is octal 0
  //2047 
  //(2*(Math.pow(8,3)))+ (0*(Math.pow(8,2))) + (4*(Math.pow(8,1))) + (7*(Math.pow(8,0)))
  //1063
//E
  // class `Octal` with at least two methods, a constructor and a method `toDecimal()`
  // constructor takes a string representing an octal and saves it to the instance of `Octal`
  // toDecimal() returns a number representing the conversion of the octal string into a decimal number
    // if the octal is invalid, return 0.
//D
  // input is string
  // output is number
//A
  // create a class `Octal`
    // constructor takes a string octal and saves it to the instance of `Octal`
    // toDecimal()
      // declare `decimal` variable and initialize it to zero
      // check if octal is valid
        // if not, return the `decimal`
      // save length of octal as starting `n` (`n` to begin with)
      // iterate this.octal
        // starting at the beggining index
        // add the following to `decimal`
          // octal[idx] * Math.pow(8, n)
        // n -= 1;
      //return `decimal`
//C

class Octal {
  constructor(octal) {
    this.octal = octal;
  }
  toDecimal() {
    let decimal = 0;
    if (!Number(this.octal) || this.octal.match(/8|9/g)) {
      return decimal;
    }
    let n = this.octal.length - 1;
    for (let idx = 0; idx < this.octal.length; idx += 1) {
      decimal += this.octal[idx] * Math.pow(8, n);
      n -= 1;
    }
    return decimal;
  }
}
module.exports = Octal;