var atbash = function(){

}

atbash.encode = function(stringToConvert){
  stringToConvert = stringToConvert.replace(/ /g,"");
  stringSplit = stringToConvert.toLowerCase().split('');


  resultsArray = [];
  stringSplit.map(function(item){
    var unicodeType = item.charCodeAt(0)
    var oppositeUnicode = 219 - unicodeType;
    var oppositeAlpha = String.fromCharCode(oppositeUnicode)
    resultsArray.push(oppositeAlpha)
  })

  convertedString = resultsArray.join("")

  return resultsArray.join("");

}