var Cart = require('../src/cart');

var mockItem = {
	amount: 10,
	product: {
		id: 'a'
	}
};
describe('Cart: ', function() {

	it(' - should contain an empty array of items', function() {
		var cart = new Cart();
		expect(cart.items).toEqual([]);
	});

	describe('addToCart: ', function() {

		describe('where item is not in cart', function() {
			it(' - should add item to items array ', function() {
				var cart = new Cart();
				cart.addToCart(mockItem);
				expect(cart.items[0].amount).toEqual(10);
				expect(cart.items[0].product.id).toEqual('a');
			});
		});

		describe('where item is in cart', function() {
			it(' - should combine item with existing item', function() {
				var cart = new Cart();
				cart.addToCart(mockItem);
				cart.addToCart(mockItem);
				expect(cart.items.length).toEqual(1);
			});
		});

	});
});