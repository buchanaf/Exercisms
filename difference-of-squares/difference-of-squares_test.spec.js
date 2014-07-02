// var Squares = require('./difference-of-squares');


var Squares = function(square){

  this.sum = (function(){
    var total = 0;
    var counter = 0;
    while(counter <= square){
      total+=counter;
      counter++
    }
    return total
  })()

  this.squareOfSums = Math.pow(this.sum, 2)


  var squareTotal = function(remain, total){
    total = total;

    if(remain === 0){
      console.log(total)
      return total;
    } else {

      total += Math.pow(remain, 2);
      remain = remain - 1;
      return squareTotal(remain, total);

    }
  }

  this.sumOfSquares = squareTotal(square, 0)
  this.difference = this.squareOfSums - this.sumOfSquares;

}









describe('Squares', function () {

  describe('up to 5', function () {
    var squares = new Squares(5);

    it('gets the square of sums', function () {
      expect(squares.squareOfSums).toBe(225);
    });

    it('gets the sum of squares', function () {
      expect(squares.sumOfSquares).toBe(55);
    });

    it('gets the difference', function () {
      expect(squares.difference).toBe(170);
    });

  });

  describe('up to 10', function () {
    var squares = new Squares(10);

    it('gets the square of sums', function () {
      expect(squares.squareOfSums).toBe(3025);
    });

    it('gets the sum of squares', function () {
      expect(squares.sumOfSquares).toBe(385);
    });

    it('gets the difference', function () {
      expect(squares.difference).toBe(2640);
    });

  });

  describe('up to 100', function () {
    var squares = new Squares(100);

    it('gets the square of sums', function () {
      expect(squares.squareOfSums).toBe(25502500);
    });

    it('gets the sum of squares', function () {
      expect(squares.sumOfSquares).toBe(338350);
    });

    it('gets the difference', function () {
      expect(squares.difference).toBe(25164150);
    });

  });

});
