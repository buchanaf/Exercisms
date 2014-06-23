var primeFactors = function(){}

primeFactors.for = function(input){
    var answerSet = [];
    if (input <= 1) {
        return answerSet;
    }
    for (var i = 2; i <=input+1; i++){
      if(input % i === 0){

        var subSet = (input/i);
        var recursiveResult = this.for(subSet);
        answerSet.push(i);
        if (recursiveResult.length > 0){
          answerSet = answerSet.concat(recursiveResult);
          return answerSet;
        }
      }
    }
    return answerSet;
}

