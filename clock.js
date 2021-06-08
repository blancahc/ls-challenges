//P
  //You should be able to add minutes to and subtract minutes from the 
  //time represented by a given clock object. Two clock objects that 
  //represent the same time should be equal to each other.
//E
  //create a Clock class
    //a constructor that accepts two number arguments representing the hour and minutes.
    //a class or static method named at that can create and return a new instance of Clock.
      //If the minutes argument is omitted, a default value of 0 will be used.
    //a method that returns the clock's current time as a string.
    //methods that add and subtract from the current time. These methods accept a number
      //of minutes to add or subtract as an argument.
    //a method that compares two clock objects for equality.

//D
  //
//A
  //
//C

class Clock {
  constructor(hour, minutes) {
    this.hour = hour;
    this.minutes = minutes;
  }
  static MINUTES_IN_HOUR = 60;
  static MINUTES_IN_DAY = 1440;

  static at(hour, minutes) {
    if (!minutes) {
      minutes = 0;
    }
    return new Clock(hour, minutes)
  }
  toString() {
    let string = '';
    string += `${this.hour < 10 ? '0' + this.hour : this.hour}:` +
              `${this.minutes < 10 ? '0' + this.minutes : this.minutes}`;
    return string;
  } 
  add(minutesToAdd) {
    let time = (this.hour * Clock.MINUTES_IN_HOUR) + this.minutes;
    time = time + minutesToAdd;
    
    while (time >= Clock.MINUTES_IN_DAY) {
      time = time - Clock.MINUTES_IN_DAY;
    }
    let newHour = Math.floor(time / Clock.MINUTES_IN_HOUR);
    let newMinutes = time % Clock.MINUTES_IN_HOUR;
    return new Clock(newHour, newMinutes);
  }
  subtract(minutes) {
    let time = (this.hour * Clock.MINUTES_IN_HOUR) + this.minutes;
    time = time - minutes;
    while (time <= 0) {
      time = time + Clock.MINUTES_IN_DAY;
    }
    let newHour = Math.floor(time / Clock.MINUTES_IN_HOUR);
    let newMinutes = time % Clock.MINUTES_IN_HOUR;
    return new Clock(newHour, newMinutes);
  }
  isEqual(clock2) {
    if (this.hour === clock2.hour && this.minutes === clock2.minutes) {
      return true;
    }
    return false;
  }
}



module.exports = Clock;

