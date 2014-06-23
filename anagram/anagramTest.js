var anagram = function(string){
  return new Anagram(string)
}

var Anagram = function(string){
  this.string = string
}

Anagram.prototype.matches = function(arr){
  var result = [];
  var string = this.string
  var arrayInput = [];

  if(typeof arguments[0] === 'string') {
    for(var key in arguments) {
      arrayInput.push(arguments[key]);
    }
  } else {
    arrayInput = arr;
  }

  revisedString = this.string.toLowerCase().split("").sort().join("");
  for (var i = 0; i < arrayInput.length; i++){
    var comparison = arrayInput[i].toLowerCase().split("").sort().join("");
    if(revisedString === comparison && this.string!==arrayInput[i]){
      result.push(arrayInput[i]);
    }
  }

  function checker (word){
    if(word.toLowerCase() !== string){
      return word
    }
  }

  result = result.filter(checker)
  return result;
}









