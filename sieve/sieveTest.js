var Sieve = function(range){

  this.primes = (function(){
    var resultsArray = []

    for (var i = 2; i < range; i++){
      var counter = 0;

      for (var j = i - 1; j > 1; j--){
        if(i % j === 0){
          counter ++
        }
      }

      if (counter === 0){
        resultsArray.push(i)
      }
    }

    return resultsArray;

  })()

}