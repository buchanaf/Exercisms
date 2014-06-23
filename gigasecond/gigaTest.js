var Gigasecond = function(date){
  this.start = date
}

Gigasecond.prototype.date = function(){
  var answer = (this.start).valueOf() + 999997200000
  return new Date(answer)
}


