var Error = function(message){
  return message;
}


var Series = function(series){
  var splitSeries = series.split('')
  this.digits = splitSeries.map(function(item){
    return parseInt(item);
  })


  this.slices = function(sliceAmount){

    var resultsArry = [];
    var digitsArr = this.digits;

    if(sliceAmount > digitsArr.length){
      throw new Error('Message')
    }

    for(var i = 0; i < digitsArr.length; i++){
      var miniArray = [];
      for(j = 0; j < sliceAmount; j++){
        if(digitsArr[i+j] || digitsArr[i+j] === 0){
          miniArray.push(digitsArr[i+j])
        }
      }
      if(miniArray.length === sliceAmount){
        resultsArry.push(miniArray);
      }
    }

    return resultsArry;
  }


}