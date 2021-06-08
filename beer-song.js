class BeerSong {
  static verse(num) {
    if (num > 1) {
      return BeerSong.verseUpTo2(num);
    } else if (num === 1) {
      return BeerSong.verse1();
    } else {
      return BeerSong.verse0();
    }
  }
  static verses(num1, num2) {
    let current = num1;
    let verses = '';
    while (current >= num2) {
      verses += BeerSong.verse(current) + "\n";
      current -= 1;
    }
    return verses;
  }
  static lyrics() {
    return BeerSong.verses(99, 0);
  };

  static verseUpTo2(num) {
    return `${num} bottles of beer on the wall, ${num} ${num > 1 ? "bottles" : "bottle"} of beer.\n` + 
    `Take one down and pass it around, ${num - 1} ${num -1 > 1 ? "bottles" : "bottle"} of beer on the wall.\n`;
  }
  static verse1() {
    return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles " +
    "of beer on the wall.\n";
  }
  static verse0() {
    return "No more bottles of beer on the wall, no more " +
    "bottles of beer.\nGo to the store and buy some " +
    "more, 99 bottles of beer on the wall.";
  }
}
module.exports = BeerSong;