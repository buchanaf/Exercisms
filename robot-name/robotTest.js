var Robot = function(){
  this.name = this.makeName();

}

Robot.prototype.makeName = function(){
    var robotName = ""
    for (var i = 0; i < 2;i++){
      robotName += Math.random().toString(36).replace(/[^a-z]+/g, '').substr(1,1);
    }
    for (var i = 0; i < 3;i++){
      robotName += Math.floor((Math.random().toString() * 9) + 1);
    }
    return robotName;
}


Robot.prototype.reset = function(){
  return this.name = this.makeName
}