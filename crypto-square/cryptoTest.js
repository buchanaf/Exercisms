var Crypto = function(string){

  this.string = string.replace(/[^a-z0-9A-Z]*/g, "").toLowerCase();

  this.normalizePlaintext = function(){
    return this.string
  }

  this.size = function(){
    return Math.ceil(Math.sqrt(this.string.length));
  }

  this.plaintextSegments = function(normal){
    var columnWidth = this.size(this.string)
    console.log(columnWidth)
    var resultsArry = [];

    if (normal){
      var stringToArray = normal;
    } else {
      var stringToArray = this.string;
    }

    for (var i = 0; i<stringToArray.length;i++){
      if(i % columnWidth === 0 | i === 0){
        resultsArry.push(stringToArray.slice(i, i + columnWidth));
      }
    }

    return resultsArry;
  }

  this.ciphertext = function(){
    var cipherColum = this.plaintextSegments();
    var normalArray = [];
    var counter = 0;

    while(counter <= cipherColum.length){
      cipherColum.forEach(function(item){
        normalArray.push(item.slice(counter, counter + 1))
      })
      counter++
    }
    return normalArray.join('');;
  }

  this.normalizeCiphertext = function(){
    var normalizeText = this.ciphertext();

    var normalCipher = this.plaintextSegments(normalizeText).join(' ');
    console.log(normalizeText);
    return normalCipher;
  }

}