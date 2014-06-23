var toRoman = function(num){
  splitNum = num.toString().split("")
  console.log("hi")
  var result = "";
  var numerals = {
    3000: "MMM",
    2000: "MM",
    1000: "M",
     900: "CM",
     800: "DCCC",
     700: "DCCC",
     600: "DC",
     500: "D",
     400: "CD",
     300: "CCC",
     200: "CC",
     100: "C",
      90: "XC",
      80: "LXXX",
      70: "LXX",
      60: "LX",
      50: "L",
      40: "XL",
      30: "XXX",
      20: "XX",
      10: "X",
       9: "IX",
       8: "VIII",
       7: "VII",
       6: "VI",
       5: "V",
       4: "IV",
       3: "III",
       2: "II",
       1: "I",
       0: "",
  }

  digitLength = splitNum.length;
  var numLength = splitNum.length


  if (digitLength === 4){
    for (var i = 0; i<digitLength;i++){
      if (i===0){
        splitNum[i] = splitNum[i]*1000
      } else if (i===1) {
        splitNum[i] = splitNum[i]*100
      } else if (i===2) {
        splitNum[i] = splitNum[i]*10
      };
    result+=numerals[splitNum[i]];
    }
  }

  if (digitLength === 3){
   for (var i = 0; i<digitLength;i++){
     if (i===0){
        splitNum[i] = splitNum[i]*100
     } else if (i===1) {
        splitNum[i] = splitNum[i]*10
     }
      result+=numerals[splitNum[i]];
    }
  }

  if (digitLength === 2){
    for (var i = 0; i<digitLength;i++){
      if (i===0){
        splitNum[i] = splitNum[i]*10
      }
      result+=numerals[splitNum[i]];
    }
  }

  if (digitLength === 1){
    for (var i = 0; i<digitLength;i++){
      result+=numerals[splitNum[i]];
    }
  }

  return result


}