var ArgumentError = function(){
  return 'quit trying to break me'
}


var WordProblem = function(question){
  var that = this;
  var question = question.slice(0, question.length - 1)
  var result;

  this.numSet = [];
  this.splitQuestion = question.split(' ')



  this.splitQuestion.forEach(function(item){
    if(parseInt(item) || item === 'plus' || item === 'minus' || item === 'multiplied' || item === 'divided'){
      if(parseInt(item)){
        that.numSet.push(parseInt(item));
      } else {
        that.numSet.push(item);
      }

    }
  })

  console.log(this.numSet)
  for(var i = 0; i < this.numSet.length - 1; i = i+2){
    console.log(this.numSet[i+1])
    if(this.numSet[i+1] === 'plus'){
      if(result){
        result = result + this.numSet[i+2]
      } else {
        result = this.numSet[i] + this.numSet[i+2]
      }
    } else if (this.numSet[i+1] === 'minus'){
       if(result){
        result = result - this.numSet[i+2]
      } else {
        result = this.numSet[i] - this.numSet[i+2]
      }
    } else if (this.numSet[i+1] === 'divided'){
      if(result){
        result = result / this.numSet[i+2]
      } else {
        result = this.numSet[i]/this.numSet[i+2]
      }
    } else if (this.numSet[i+1] === 'multiplied'){
      if(result){
        result = result * this.numSet[i+2]
      } else {
        result = this.numSet[i] * this.numSet[i+2]
      }
    }

  }

  this.answer = function(){
    if(this.numSet.length < 3){
      throw new ArgumentError
    } else {
    return result
    }
  }

}