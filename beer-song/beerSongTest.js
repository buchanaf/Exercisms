Jeer = function(verseNum){
}

var Beer = new Jeer();

Jeer.prototype.verse = function(verseNum) {
    var endNum = verseNum;
    return Beer.sing(verseNum, endNum);
};


Jeer.prototype.sing = function(verseNum, verseEnd) {
  if (verseEnd === undefined){
    verseEnd = 0;
  }
  var result = [];
  var start = verseNum;
  var end = verseEnd;

  for(var i = 0; i <= (start-end); i++){
    var lessBeer = verseNum;

    if (verseNum > 2){
      lessBeer = verseNum - 1;
      result.push(verseNum + " bottles of beer on the wall, " + verseNum + " bottles of beer.\nTake one down and pass it around, " + lessBeer + " bottles of beer on the wall.\n");
      verseNum = verseNum-1
      } else if (verseNum>1) {
      lessBeer = verseNum - 1;
      result.push(verseNum + " bottles of beer on the wall, " + verseNum + " bottles of beer.\nTake one down and pass it around, " + lessBeer + " bottle of beer on the wall.\n");
      verseNum = verseNum-1
      } else if (verseNum === 1) {
      lessBeer = "no more";
      result.push(verseNum + " bottle of beer on the wall, " + verseNum + " bottle of beer.\nTake it down and pass it around, " + lessBeer + " bottles of beer on the wall.\n");
       verseNum = verseNum-1
    } else {
      result.push("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n");
    };
  }

  return result.join("\n");
};
