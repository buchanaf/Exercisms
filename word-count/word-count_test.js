var words = function (inputString) {
  var emptyArray = [];
  var wordObject = {};
  inputString = inputString.replace(/\n/g, " ")
  emptyArray =  inputString.split(" ");

  for (var i = 0; i < emptyArray.length; i++){
    emptyArray[i] = emptyArray[i].replace(/[:!&@$%^&,¿¡?]/g, "")
  }

  for (var i = 0; i < emptyArray.length; i++){
    if(emptyArray[i] === ""){
        emptyArray.splice(i, 1);
     }
  }

  for (var i = 0; i < emptyArray.length; i++){
    emptyArray[i] = emptyArray[i].toLowerCase();
    wordObject[emptyArray[i]] = 0
  }

  for (var i = 0; i < emptyArray.length; i++){
    if(wordObject[emptyArray[i]] === 0){
      wordObject[emptyArray[i]] = 1;
    } else {
      wordObject[emptyArray[i]] += 1;
    }
  }

  return wordObject;
};