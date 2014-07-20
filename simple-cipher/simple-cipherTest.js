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

  this.key = startString

  if(this.key){
    this.charCodes = this.key.split('').map(function(item){
      return item.charCodeAt(0) - 97
    });
  }

  this.encode = function(stringToEncode) {
    var stringToEncode = stringToEncode.split('')
    var that = this
    var arrayToEncode = []
    var recode = []

    stringToEncode.forEach(function(item, index){
      arrayToEncode.push(item.charCodeAt(0) + that.charCodes[index] + 97)
    })

    arrayToEncode.forEach(function(item,index){
      if(item){
        console.log(item.fromCharCode(0))
        recode.push(item.fromCharCode(0))
      }
    })

    console.log(recode)
    this.key = stringToEncode;
    return this.key
  }

  this.decode = function(stringToEncode) {
    return this.key
  }

}