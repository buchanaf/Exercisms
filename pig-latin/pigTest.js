var pigLatin = {
  translate: function(word){
    var wordArr = word.split(' ')
    var result = [];
    wordArr.forEach(function(word){
      var vowelIndex = word.search(/[aeiou]/)
      if(vowelIndex === 0){
          result.push(word + 'ay')
      } else if (word.indexOf('qu') !== -1){
          var quIndex = word.indexOf('qu');
          var prefix = word.slice(0, quIndex + 2);
          result.push(word.slice(quIndex+2) + prefix + 'ay')
      } else if (vowelIndex !== 0){
          var prefix = word.slice(0, vowelIndex)
          result.push(word.slice(vowelIndex) + prefix + 'ay')
      }
    });
    return result.join(" ")
  }
};

