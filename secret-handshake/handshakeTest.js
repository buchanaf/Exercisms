var SecretHandshake = function(num){
  this.num =  num;

  var commands = function(){

  }


  this.commands = function(){
    var num = this.num
    var base = 2;
    var result = '';
    var iterator = function(result, num){

      for (var i = 0; num >= Math.pow(base,i); i++){
        if(num >= Math.pow(base,i) &&
           num < Math.pow(base, i + 1)
          ){
          result += '1';
          for(var j = i; j > 0; j--){
            result += '0';
          }
        }
      }
      return result
    }

    return iterator();
  }

}


