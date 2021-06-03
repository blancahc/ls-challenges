class PerfectNumber {
  static classify(number) {
    if (number <= 0) {
      throw new Error('invalid');
    }
    let sum = 1;
    for (let divisor = 2; divisor <= (number / 2); divisor += 1) {
      if (number % divisor === 0) {
        sum += divisor;
      }
    }
    if (sum === number) {
      return 'perfect';
    }
    if (sum > number) {
      return 'abundant';
    }
    return 'deficient';
  }
}

module.exports = PerfectNumber;