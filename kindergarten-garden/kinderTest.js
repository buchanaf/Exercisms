var Garden = function(flowers, students){
  var children = students || ['alice', 'bob', 'charlie', 'david', 'eve', 'fred', 'ginny', 'harriet', 'ileana', 'joseph', 'kincaid', 'larry']

  children = children.sort();
  children = children.map(function(student){
    return student.toLowerCase();
  })

  this.flowerKey = {
    'R': 'radishes',
    'C': 'clover',
    'G': 'grass',
    'V': 'violets',
  }

  this.flowersFront = flowers.split('\n')[0]
  this.flowersBack = flowers.split('\n')[1]

  var that = this;
  children.forEach(function(item, index){
    if(index !== 0){
      index = index + index;
    }

    that[item] = [that.flowerKey[that.flowersFront[index]],
                  that.flowerKey[that.flowersFront[index + 1]],
                  that.flowerKey[that.flowersBack[index]],
                  that.flowerKey[that.flowersBack[index+1]]]
  })


}