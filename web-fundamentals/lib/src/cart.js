function Cart() {
  this.items = [];
}

Cart.prototype.addToCart = function(item) {

  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].product.id === item.product.id) {
      this.items[i].amount += item.amount;
      return;
    }
  }
  this.items.push(item);
};

Cart.prototype.updateCart = function(item) {
  // body...
};

module.exports = Cart;