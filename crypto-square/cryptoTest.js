var Crypto = function(string){

  this.string = string.replace(/[^a-z0-9A-Z]*/g, "").toLowerCase();

  this.normalizePlaintext = function(){
    return this.string
  }

  this.size = function(){
    return Math.ceil(Math.sqrt(this.string.length));
  }

  this.plaintextSegments = function(){
    var columnWidth = this.size(this.string)
    var resultsArry = [];

    for (var i = 0; i<this.string.length;i++){
      if(i % columnWidth === 0 | i === 0){
        resultsArry.push(this.string.slice(i, i + columnWidth));
      }
    }

    return resultsArry;
  }

  this.ciphertext = function(){
    return 's'
  }
}