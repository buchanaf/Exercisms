var compute = function (firstArg, secondArg){
  var result = 0;
  for(var i = 0; i < firstArg.length; i++){
    if(firstArg[i]!==secondArg[i]){
      result ++;
    }
  }

  if(firstArg.length-secondArg.length>0){
    var lengthAdj = firstArg.length-secondArg.length;
  } else {
    var lengthAdj = 0;
  }
  return result - lengthAdj;
}