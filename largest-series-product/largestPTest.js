var Error = function(){
  return 'oops'
}

var Series = function(number){
  this.numbers = number.split('');


  this.digits = this.numbers.map(function(item){
    return parseInt(item);
  })

  this.slices = function(num){

    var resultsArr = [];
    for (var i = 0; i <= this.digits.length/num + 1; i++){
      var tempArr = [];
      for(var j = 0; j < num; j++){
        tempArr.push(this.digits[j+i]);
      }
      resultsArr.push(tempArr);
    }
    return resultsArr
  }

  this.largestProduct = function(num){
    if(num>this.digits.length){
      throw new Error();
    }
    var resultsArr = [];
    for(var i = 0; i < this.digits.length - num + 1; i++){
      var result = 1;
      for (var j = 0; j < num; j++){
        result = result * this.digits[i+j];
      }
      resultsArr.push(result);
    }

    resultsArr = resultsArr
    resultsArr.sort(function compare(a, b) {
      if (a<b)
         return -1;
      if (a>b)
         return 1;
      // a must be equal to b
      return 0;
    }).reverse()
    return resultsArr[0]
  }

}