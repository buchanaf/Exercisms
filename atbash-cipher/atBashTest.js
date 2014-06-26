var atbash = function(){

}

atbash.encode = function(stringToConvert){
  stringToConvert = stringToConvert.replace(/( |,)/g,"");
  stringSplit = stringToConvert.toLowerCase().split('');

  resultsArray = [];
  stringSplit.forEach(function(item, index){
    if(parseInt(item)){
      index = index+1;
      resultsArray.push(item)

    } else {
      index = index+1;
      var unicodeType = item.charCodeAt(0)
      if (unicodeType !== 46){
        var oppositeUnicode = 219 - unicodeType;
        var oppositeAlpha = String.fromCharCode(oppositeUnicode)
        resultsArray.push(oppositeAlpha)
      }
    }

    if(index % 5 == 0 && index !== stringSplit.length-1){
      resultsArray.push(" ")
    }

  });

  var stringConverted = resultsArray.join("").trim();

  return stringConverted
}