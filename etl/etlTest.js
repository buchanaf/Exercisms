var transform = function (oldObj){
  var newObj = {};
  for(item in oldObj){
    var arrayLength = oldObj[item].length
    for(var i = 0; i < arrayLength ; i++){
      var newKey = oldObj[item].shift();
      newKey = newKey.toLowerCase();
      newObj[newKey] = parseInt(item)
    }
  }
  return newObj
}