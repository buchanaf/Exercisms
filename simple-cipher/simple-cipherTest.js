var Error = function(string){
  return string
}

var Cipher = function(startString) {

  if (startString && startString.match(/[a-z]+/)) {
    var matchLength = startString.match(/[a-z]+/)[0].length
  } else {
    matchLength = undefined;
  }

  if((startString && (!matchLength || matchLength !== startString.length)) || startString === ""){
    throw new Error('Bad key')
  }



  this.key = startString || 'placeholder';

  this.encode = function(stringToEncode) {
    this.key = stringToEncode;
    return this.key
  }

  this.decode = function(stringToEncode) {
    return this.key
  }

}