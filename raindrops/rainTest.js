

var Raindrops = function(){

  this.convert = function(drop){
    var result = "";
    var counter;

    if (drop % 3 === 0){
      result += "Pling";
    }
    if (drop % 5 === 0){
      result += "Plang";
    }
    if (drop % 7 === 0){
      result += "Plong";
    }

    if (result == ""){
      result = drop.toString();;
    }

    return result
  }
}