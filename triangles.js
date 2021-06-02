//P (Understanding the Problem):
  // Determine whether a triangle is equilateral, isosceles, or scalene
  // An equilateral has all 3 sides the same length
  // An isosceles has exactly 2 sides the same length
  // A scalene has all sides of different lengths
  // All sides must be of length > 0, and sum of lengths of any two sides must be greater
  // than the 3rd side
//E (Examples and Test Cases):
  // must have a Triangle class
  // constructor accepts three arguments representing three side lengths
    // exception raised in the constructor is any side is <=0
    // exception raised if the side lengths taken together don't describe a valid triangle
  // method `kind` that returns a string representing the type of the triangle
//D (Data Structures): 
  // return value is a string
//A (Algorithm):
  // Constructor
    // Save the 3 side lengths
    // Check whether any side length is less than or equal to zero.
      // If yes, raise an exception
    // Determine whether the sum of any two sides is less than or equal to the 3rd side.
      // If yes, raise an exception.
  // `kind`
    // Compare the values representing the 3 side lengths
    // If all 3 side lengths are equal return 'equilateral'
    // If none of the side lengths are equal to one another, return 'scalene'
    // If it is not 'equilateral' or 'scalene', return 'isosceles'
//C (Code):

class Triangle {
  constructor(side1, side2, side3) {
    [this.side1, this.side2, this.side3] = [side1, side2, side3];
    this._isValidTriangle();
  }

  _isValidTriangle() {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw new Error('invalid side length');
    }
    if ((this.side1 + this.side2 <= this.side3) ||
         (this.side1 + this.side3 <= this.side2) || 
         (this.side2 + this.side3 <= this.side1)) {
      throw new Error('invalid side length');
    }
  }
  kind() {
    if (this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3) {
      return 'scalene';
    } else if (this.side1 === this.side2 && this.side2 === this.side3 && this.side1 === this.side3) {
      return 'equilateral';
    }
    return 'isosceles';
  }
}

module.exports = Triangle;
