var Octal = function(octal){

  this.toDecimal = function(total){
    if(!parseInt(octal)){
      return 0
    }

    var splitOctal = octal.split('')
    var result = 0
    splitOctal.forEach(function(item, index){
      result += item * Math.pow(8,(splitOctal.length - (index+1)))
    })

    return result;
  }
}