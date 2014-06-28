var Trinary = function(numString) {
  this.toDecimal = function() {
    var numArray = numString.split('').reverse();
    var total = 0;

    if(!parseInt(numString)){
      return 0;
    }

    numArray.forEach(function(item, index){
      var itemInt = parseInt(item);
      total += item * Math.pow(3, index);
    })

    return total;
  }
}