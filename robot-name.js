//P
  // Write a program that manages robot factory settings
  // When robots come off the floor they have no name
  // when you first boot it, a random name is generated
    // such as RX837 or BC811
  // Reset robot to factory settings
    // name gets wiped off
  // Next time you ask, it will respond with a new random name
//E
  //Class
    // name() method gives random name
      // ensure it didn't give the same name as before
    //reset() method
      // wipe any existing name and generate a new one
//D
  // strings to save indexes of letters to generate random name
  // array to save generated names
//A 
  // save static string with letters A-Z,
  // name() 
    // generate random name
      //Use Math.random() and indexOf() to generate first two digits
      // Use Math.random() to generate last three digits
    // check that the generated names is not in the `Robot.names` array 
      // if it is, re-run this function
    // save the name to `Robot.names` and to instance of  `Robot`
    // return the name
  // reset()
    // remove the name fron `Robot.names`
    // call name()
//C
class Robot {
  static names = [];
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  name() {
    if (this.robotName) {
      return this.robotName;
    }
    let robotName = this._generateName();
    if (Robot.names.includes(robotName)) {
      return this.name();
    }
    Robot.names.push(robotName);
    this.robotName = robotName;
    return robotName;
  }
  _generateName() {
    let name = '';
    name += Robot.LETTERS[this._getIndex()];
    name += Robot.LETTERS[this._getIndex()];
    name += this._getDigit();
    name += this._getDigit();
    name += this._getDigit();
    return name;
  }
  _getIndex() {
    let min = Math.ceil(0);
    let max = Math.floor(25);
  return Math.floor(Math.random() * (max - min + 1) + min);
  }
  _getDigit() {
    let min = Math.ceil(0);
    let max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1) + min);
  }
  reset() {
    let index = Robot.names.indexOf(this.robotName);
    Robot.names.splice(index, 1);
    this.robotName = undefined;
  }
}

module.exports = Robot;
