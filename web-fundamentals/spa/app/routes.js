var products = require('./data/items');
var Cart = require('../../lib/src/cart');
var Item = require('../../lib/src/item');
var cart = new Cart();


var staticContentRoute = {
	method: 'GET',
	path: '/{path*}',
	config: {
		handler: {
			directory: {
				path: './app/assets',
				listing: false,
				index: false
			}
		}
	}
};

var indexRoute = {
	method: 'GET',
	path: '/{path?}',
	config: {
		handler: {
			file: './app/assets/index.html'
		}
	}
};


var productListRoute = {
	method: 'GET',
	path: '/api/products',
	config: {
		handler: function(request) {
			request.reply({
				products: products
			});
		}
	}
};

var cartListRoute = {
	method: 'GET',
	path: '/api/cart',
	config: {
		handler: function(request) {
			request.reply({
				cart: cart
			});
		}
	}
};

var addToCartRoute = {
	method: 'POST',
	path: '/api/cart',
	config: {
		handler: function(request) {
			var product,
				id = parseInt(request.payload.id, 10);
			// Find the item that was added based on the id and attach
			// its name and price to the object that will be saved in
			// the cartItems array
			for (var i = 0; i < products.length; i++) {
				if (products[i].id === id) {
					product = products[i];
					break;
				}
			}

			var currentItem = new Item(product, parseInt(request.payload.amount, 10));
			cart.addToCart(currentItem);

			request.reply({cart: cart});
		}
	}
};



module.exports = [indexRoute, staticContentRoute,  productListRoute, addToCartRoute];