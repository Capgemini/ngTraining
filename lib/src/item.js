function Item (product, amount) {
	this.product = product;
	this.amount = amount;
}
Item.prototype.totalCost = function() {
	return this.product.price * this.amount;
};

module.exports = Item;