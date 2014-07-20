var Triplet = function(one, two, three){

  var trips = []
  var args = arguments;

  for(var i = 0; i<args.length;i++){
    trips.push(args[i])
  }

  this.sum = function(){
    var result = 0;
    trips.forEach(function(item){
      result += item;
    })

    return result
  }

  this.product = function(){
    var result = 1;
    trips.forEach(function(item){
      result = result * item;
    })

    return result
  }

  this.isPythagorean = function(){
    if(Math.pow(one, 2) + Math.pow(two, 2) === Math.pow(three, 2)){
      return true
    } else {
      false
    }
  }

}

Triplet.where = function(minMax){
  var minMax = minMax
  var results = [];

  for (var i = minMax.minFactor || 1; i <= minMax.maxFactor; i++){
    for (var j = i || 1; j <= minMax.maxFactor; j++){
      for (var k = j || 1; k <= minMax.maxFactor; k++){
        if(new Triplet(i,j,k).isPythagorean()){
          if(minMax.sum){
            if((i + j + k) === minMax.sum){
              results.push(new Triplet(i,j,k));
            }
          } else {
            results.push(new Triplet(i,j,k));
          }
        }
      }
    }
  }

  var counterObject = {};
  var finalResults = []

  results.forEach(function(item, index){
    console.log(item.product())
    if (counterObject.hasOwnProperty(item.product())){
      return
    } else {
      counterObject[item.product()] = 1;
      finalResults.push(item)
    }
  })


  return finalResults

}

