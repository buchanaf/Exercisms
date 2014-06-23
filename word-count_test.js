var words = function (inputString) {
  var emptyArray = [];
  var wordObject = {};
  emptyArray =  inputString.split(' ');
  for (var i = 0; i < emptyArray.length; i++){
    if(wordObject[emptyArray[i]] === undefined){
      wordObject[emptyArray[i]] = 1;
    } else {
      wordObject[emptyArray[i]] += 1;
    }
  }
  return wordObject;
};