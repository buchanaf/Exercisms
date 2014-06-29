
var bufferEmptyException = function(){
  console.log('ERROR');
};


var bufferFullException = function(){
  console.log('ERROR');
};


var circularBuffer = function(bufferlength){
  this.bufferlength = bufferlength;
  this.bufferArray = [];

  this.write = function(text){
    if(text === null || text === undefined){
      return
    }
    this.bufferArray.push(text);

    if(this.bufferArray.length > this.bufferlength){
      throw new bufferFullException();
    }
  }

  this.read = function(){
    if(this.bufferArray.length === 0){
      throw new bufferEmptyException();
    } else {
      var result = this.bufferArray[0];
      this.bufferArray.shift();
      return result;
    }
  }

  this.clear = function(){
    this.bufferArray = [];
  }

  this.forceWrite = function(text){
    this.bufferArray.shift();
    this.bufferArray.push(text);
  }

  return this;
}
