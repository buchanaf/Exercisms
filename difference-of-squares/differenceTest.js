var Squares = function(square){

  this.sum = (function(){
    var total = 0;
    var counter = 0;
    while(counter <= square){
      total+=counter;
      counter++
    }
    return total
  })()

  this.squareOfSums = Math.pow(this.sum, 2)


  var squareTotal = function(remain, total){
    total = total;

    if(remain === 0){
      console.log(total)
      return total;
    } else {

      total += Math.pow(remain, 2);
      remain = remain - 1;
      return squareTotal(remain, total);

    }
  }

  this.sumOfSquares = squareTotal(square, 0)
  this.difference = this.squareOfSums - this.sumOfSquares;

}
