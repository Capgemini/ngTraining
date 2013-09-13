var products = require('./data/items');
var Cart = require('../../lib/src/cart');
var Item = require('../../lib/src/item');
var cart = new Cart();

var indexRoute = {
	method: 'GET',
	path: '/',
	config: {
		handler: function(request) {
			request.reply.view('index.html', {
				products: products,
				cart: cart
			});
		}
	}
};

var staticContentRoute = {
	method: 'GET',
	path: '/{path*}',
	config: {
		handler: {
			directory: {
				path: './app',
				listing: false,
				index: false
			}
		}
	}
};


var addToCartRoute = {
	method: 'POST',
	path: '/addToCart',
	config: {
		handler: function(request) {
			var product,
					id = parseInt(request.payload.id, 10);
			// Find the item that was added based on the id and attach
			// its name and price to the object that will be saved in
			// the cartItems array
			for (var i = 0; i < products.length; i++) {
				if (products[i].id === id) {
					product =  products[i];
					break;
				}
			}

			var currentItem = new Item(product, parseInt(request.payload.amount, 10));
			cart.addToCart(currentItem);

			request.reply.redirect('/');
		}
	}
};

module.exports = [indexRoute, staticContentRoute, addToCartRoute];