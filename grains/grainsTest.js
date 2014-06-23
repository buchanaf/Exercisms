var Grains = function(num){
}

Grains.prototype.square = function(num){
  if (num === 1){
    return 1
  } else if(num === 2){
    return 2;
  } else {
    return 2 * this.square(num-1)
  }
}

Grains.prototype.total = function(){
  return this.square(65)
}