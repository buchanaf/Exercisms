var toRna = function(dna){
  var transcription = {'G': "C", C:"G", T:"A", A:"U"}
  var splitDNA = dna.split("")
  var result = [];
  for(var i = 0; i < splitDNA.length; i++){
    for (key in transcription){
      if (splitDNA[i] === key){
        result.push(transcription[key])
      }
    }
  }
  // console.log(splitDNA.join(""))
  return result.join("")
}


