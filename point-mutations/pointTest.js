
var DNA = function (strand1) {


  this.hammingDistance = function(strand2){
    var assist = 0;
    if (strand1 === ""){
      return 0
    } else {
    var counter = 0;
    for (var i = 0; i < strand1.length; i++){
      if (strand1[i] !== strand2[i]){
        counter++;
      }
    }
    if (strand1.length>strand2.length){
      assist = strand1.length-strand2.length
    }

    return counter - assist
    }
  }
}