var Palindromes = function(max){
  this.generate = function(){
    var pairings = [];
    if(!max.minFactor){
      max.minFactor = 0;
    }
    for(var i = max.minFactor || 0; i <= max.maxFactor - 1; i++){

      for(var j = max.maxFactor; j > max.minFactor; j--){
        pairings.push([i + 1, j])
      }
    }

    var productArr = [];

    pairings.forEach(function(item){
      productArr.push(item[0] * item[1]);
    })

    productArr = productArr.map(function(item){
      return item.toString().split('')
    })

    pallindromeArr = [];
    productArr.forEach(function(item, index){
      var isPally = true;
      for (var i = 0; i < item.length; i++){
        if(item[i] !== item[item.length - i - 1]){
          isPally = false;
        }
      }
      if(isPally){
        pallindromeArr.push({value: parseInt(item.join('')), factors: [pairings[index]]});
      }
    })

    return [pallindromeArr, productArr];

  }

  this.largest = function(){
    var results = this.generate();
    var palindromeArr = results[0];
    var productArr = results[1];

    var largest;
    pallindromeArr.forEach(function(item){
      if(!largest){
        largest = item;
      } else if (item.value > largest.value) {
        largest = item;
      } else if (item.value === largest.value &&
                 largest.factors[0][0] !== item.factors[0][1] &&
                 largest.factors[0][1] !== item.factors[0][0]) {

        largest.factors.push(item.factors[0]);
      }

    })

    return largest;

  }

  this.smallest = function(){
    var results = this.generate();
    var palindromeArr = results[0];
    var productArr = results[1];

    var smallest;
    pallindromeArr.forEach(function(item){
      if(!smallest){
        smallest = item;
      } else {
        if (item.value < smallest.value){
          smallest = item;
        }
      }
    })

    return smallest;
  }



}