var Binary = function(input){
  this.input = input

}

Binary.prototype.toDecimal = function(){
  splitInput = this.input.split("")
  console.log(splitInput)
  for (var j = 0; j <splitInput.length; j++){
    console.log(splitInput[j]);
    if ((splitInput[j] != 1) && (splitInput[j] != 0)){
      return 0
    }
  }

  result = 0;
  for (var i = 0; i < splitInput.length; i++){
    if(splitInput[i] == 0){
      result+=0
    } else{
      result += Math.pow(2,splitInput.length - (i+1))
    }
    console.log(result)
  }
  return result
}