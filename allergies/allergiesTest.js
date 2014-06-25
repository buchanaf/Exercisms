
var Allergies = function(input) {

  this.allergens = [];
  var typeArr = [128,64,32,16,8,4,2,1]
  var types = {
    128: 'cats',
    64: 'pollen',
    32: 'chocolate',
    16: 'tomatoes',
    8: 'strawberries',
    4: 'shellfish',
    2: 'peanuts',
    1: 'eggs'
  }

  this.addtype = function(input){
    if (input>255){
      input -= 255
    }

    var allgRemain = input;
    var allergies = types[input];
    var that = this;

    if(allergies){
      this.allergens.push(allergies);
    } else {
      typeArr.forEach(function(item){
        if(item <= allgRemain){
          allgRemain = allgRemain - item;
          that.allergens.unshift(types[item]);
        }
      })
    }
  }

  this.allergicTo = function(allergy){
    var hasAllergy = false;
    this.allergens.forEach(function(item){
      if(item === allergy){
        hasAllergy = true;
      }
    });

    return hasAllergy;
  }

  this.addtype(input);

  this.list = function(){
    return this.allergens;
  }
}