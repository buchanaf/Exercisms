var PhoneNumber = function(num){
  this.num = num

  this.cleaner = function(){
    cleanNum = this.num.replace(/[ .()-]/g,"")
    return cleanNum
  }

  this.number = function(){
    cleanNum = this.cleaner(this.num)
    if((cleanNum.length>10 && cleanNum[0]!== "1") || cleanNum.length<10) {
      cleanNum = "0000000000"
    } else if(cleanNum[0]==="1" && cleanNum.length>10){
      cleanNum= cleanNum.slice(1)
    }
    return cleanNum;
  };

  this.areaCode = function(){
    cleanNum = this.cleaner(this.num)
    return cleanNum.slice(0,3)

  }
  this.toString = function(){
    cleanNum = this.cleaner(this.num)
    cleanNum = "(" + cleanNum.slice(0,3) + ") " + cleanNum.slice(3,6) + "-" + cleanNum.slice(6,10)
    return cleanNum
  }

};


