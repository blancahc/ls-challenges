//P
  // Write a program that turns numbers into their Modern Roman equivalent
  // 1 -> I
  // 5 -> V
  // 10 -> X
  // 50 -> L
  // 100 -> C
  // 500 -> D
  // 1000 -> M




  // Don't worry about numbers higher than 3000
  // Modern Roman numerals are written by expressing each digit of the number separately,
  // starting with the left most digit, and skipping any value of zero.
//E
  // create class named "RomanNumeral" that has a constructor that takes an integer and 
    // saves it to the instance
    // does not throw error
  // has a `toRoman()` method that converts the number saved in the instance to a 
  // modern Roman numeral. It returns a string of capital letters.
//D - `toRoman()` returns a string
//A 
  // Create a class `RomanNumeral`
  // Constructor takes an argument number
    // saves this.number = number
  // `toRoman()`
    // let str = this.number.toString();
    // result = []
    // iterate str starting at index = str.length -1, and subtract one at each iteration
      // if str[idx] is not zero
        // result.unshift(conversion[str[idx]])
      // return the result as a string
//C

class RomanNumeral {
  constructor(integer) {
    this.number = integer;
  }

  toRoman() {
    let str = this.number.toString();
    let result = [];
    let multiplier = '1';
    for (let idx = str.length -1; idx >= 0; idx -= 1) {
      if (str[idx]!= 0) {
        let val = str[idx] * (Number(multiplier));
        result.unshift(this._convert(val));
      }
      multiplier += '0';
    }
    return result.join('');
  }

  _convert(value) {
    let conversion = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
      10: 'X',
      20: 'XX',
      30: 'XXX',
      40: 'XL',
      50: 'L',
      60: 'LX',
      70: 'LXX',
      80: 'LXXX',
      90: 'XC',
      100: 'C',
      200: 'CC',
      300: 'CCC',
      400: 'CD',
      500: 'D',
      600: 'DC',
      700: 'DCC',
      800: 'DCCC',
      900: 'CM',
      1000: 'M',
      2000: 'MM',
      3000: 'MMM',
    }
    return conversion[value];
  }
}

module.exports = RomanNumeral;