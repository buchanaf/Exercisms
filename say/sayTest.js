var say = function(){


  var doubles = {2: 'twenty',
                 3: 'thirty',
                 4: 'fourty',
                 5: 'fifty',
                 6: 'sixty',
                 7: 'seventy',
                 8: 'eighty',
                 9: 'ninety',

  }
}

say.inEnglish = function(num){
      var singles = {0: 'zero',
                 1: 'one',
                 2: 'two',
                 3: 'three',
                 4: 'four',
                 5: 'five',
                 6: 'six',
                 7: 'seven',
                 8: 'eight',
                 9: 'nine',
                 10: 'ten',
                 11: 'eleven',
                 12: 'twelve',
                 13: 'thirteen',
                 14: 'fourteen',
                 15: 'fifteen',
                 16: 'sixteen',
                 17: 'seventeen',
                 18: 'eighteen',
                 19: 'nineteen',
                 }

    var splitNum = num.toString().split('')
    var resultsArr = [];

    for(var i = Math.ceil(splitNum.length/3); i >= splitNum.length/3; i--){
      var temp = [];
      for(var j = 0; j<3; j++){
        if(splitNum[j + i - 1] || splitNum[j + i - 1] === 0){
          temp.push(splitNum[j])
        }
      }

    resultsArr.push(temp)
    }


    return singles[resultsArr[0][0]]
  }