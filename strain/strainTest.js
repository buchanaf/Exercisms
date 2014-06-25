var strain = function(){

}

strain.keep = function(array, func){
  var results = [];
  var arrayTF = array.map(func);

  array.forEach(function(item, index){
    if(arrayTF[index]){
      results.push(item)
    }
  })

  return results;

}