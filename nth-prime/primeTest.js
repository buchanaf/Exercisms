var prime = function(){
}

var Error = function(){
  return "Prime is not possible";
}

prime.nth = function(num){
  if(num === 0 || !parseInt(num)){
    throw new Error();
  }

  var resultsArr = [];
  for(var i = 2; i<1000000; i++){
    var isPrime = true;
    for (var j = 2; j <= Math.floor(Math.sqrt(i));j++){

      if(i % j === 0){
        isPrime = false;
      }
    }

    if(isPrime){
      resultsArr.push(i);
    }
  }
  console.log(resultsArr)

  return resultsArr[num-1]
}