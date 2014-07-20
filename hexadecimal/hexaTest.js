var Hexadecimal = function(hex){

  this.toDecimal = function(){
    if(hex.search(/[g-z]/) !== -1){
      return 0
    }

    var converter = {
      'a':10,
      'b':11,
      'c':12,
      'd':13,
      'e':14,
      'f':15,
    }

    var hexaArray = hex.split('')

    hexaArray = hexaArray.map(function(item){
      console.log(parseInt(item))
      if(parseInt(item) || parseInt(item) === 0){
        return parseInt(item)
      } else {
        return converter[item]
      }
    })

    var result = 0;
    hexaArray.forEach(function(item, index){
      result += item * Math.pow(16,(hexaArray.length - (index+1)))
    })

    return result;
  }
}