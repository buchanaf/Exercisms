var Trinary = function(numString) {
  this.toDecimal = function(){
    var numArray = numString.split('').reverse();
    var total = 0;

    numArray.forEach(function(item, index){
      var itemInt = parseInt(item)
      console.log(Math.pow(item * 3, index))
      total +=  Math.pow(item * 3, index)
    })

    return parseInt(numString)
  }
}