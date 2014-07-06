var LinkedList = function(){
  this.linkList = [];

  this.push = function(num){
    this.linkList.push(num)
  }

  this.pop = function(num){
    return this.linkList.pop()
  }

  this.shift = function(num){
    return this.linkList.shift()
  }

  this.unshift = function(num){
    return this.linkList.unshift(num)
  }

  this.count = function(){
    return this.linkList.length
  }

  this.delete = function(num){
    for(var i = this.linkList.length; i>= 0; i--){
      if(this.linkList[i] === num){
        this.linkList.splice(i, 1);
        break;
      }
    }
  }

}