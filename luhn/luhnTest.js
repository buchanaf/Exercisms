var Luhn = function(digit){

    var luhnArr = digit.toString().split('').reverse()
    var resultsArr = [];
    var sum = 0;

    luhnArr.forEach(function(item, index){
      if((index+1) % 2 === 0){
        var num = item * 2;
        if(num>=10){
          num = num - 9;
        }
        resultsArr.unshift(num)
      } else {
        resultsArr.unshift(parseInt(item));
      }
    })

    resultsArr.forEach(function(item){
      sum += item
    })

    this.addends = resultsArr;
    this.checkDigit = ((sum+1) % 10);
    this.checksum = sum;
    this.valid = (sum) % 10 === 0 ?  true : false;
}

Luhn.create = function(digit){
    var luhnArr = digit.toString().split('').reverse()
    var resultsArr = [];
    var sum = 0;

    luhnArr.unshift(0)
    luhnArr.forEach(function(item, index){
      if((index+1) % 2 === 0){
        var num = item * 2;
        if(num>=10){
          num = num - 9;
        }
        resultsArr.unshift(num)
      } else {
        resultsArr.unshift(parseInt(item));
      }
    })

    resultsArr.forEach(function(item){
      sum += item
    })

    var checkdigit = sum % 10;
    var digit = digit.toString();

    if(checkdigit === 0){
      digit += '0'
    } else {
      digit += (10 - checkdigit).toString()
    }

  return parseInt(digit)
}