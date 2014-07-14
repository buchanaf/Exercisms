var Matrix = function(matrix){
  var splitMatrix = matrix.split('\n');
  var length = splitMatrix.length
  var unitMatrix = splitMatrix.map(function(item){
     var tempArr = item.split(' ');
     tempArr = tempArr.map(function(item){
      return parseInt(item);
     })

     return tempArr
  })

  this.rows = unitMatrix;
  this.columns = [];

  for(var i = 0; i<this.rows[0].length; i++){
    var tempArr = [];
    this.rows.forEach(function(item){
      tempArr.push(item[i]);
    })
    this.columns.push(tempArr);
  }
}