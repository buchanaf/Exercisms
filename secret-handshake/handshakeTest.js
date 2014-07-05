var SecretHandshake = function(num){
  this.num =  num;

  this.commands = function(){
    var num = this.num
    var base = 2;
    var result = [];
    var resultsArry = [];

    var iterator = function(result, num){
      if(num === 0){
        console.log(result);
        return result;
      }

      for (var i = 0; num >= Math.pow(base,i); i++){
        if(num >= Math.pow(base,i) &&
           num < Math.pow(base, i + 1)
          ){
            result[i] = 1;
            num = num - Math.pow(base,i);
            return iterator(result, num)
          } else {
            result[i] = 0;
        }
      }
    }

    var binaryResult =  iterator(result, num);
    binaryResult.forEach(function(item, index){
      if(item && index === 0){
        resultsArry.push("wink");
      } else if(item && index === 1){
        resultsArry.push("double blink");
      } else if(item && index === 2){
        resultsArry.push("close your eyes");
      } else if(item && index === 3){
        resultsArry.push("jump");
      } else if(item && index === 4){
        resultsArry = resultsArry.reverse();
      }
    });
    return resultsArry
  }

}


