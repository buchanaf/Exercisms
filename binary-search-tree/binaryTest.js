var Bst = function(num) {
  this.data = num;
  this.left = null;
  this.right = null;
};

Bst.prototype.insert = function(num) {
  var node = new this.constructor(num);

  if ( num <= this.data ) {
    if ( !this.left ) {
      this.left = node;
    } else {
      this.left.insert(num);
    }
  } else {
    if ( !this.right ) {
      this.right = node;
    } else {
      this.right.insert(num);
    }
  }
};

Bst.prototype.each = function(func){
  if (this.left) {
    this.left.each(func);
  }

  func(this.data);

  if (this.right) {
    this.right.each( func );
  }

}