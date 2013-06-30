var items = require('./data/items');

var indexRoute = {
  method: 'GET',
  path: '/',
  config: {
    handler: function(request) {
      request.reply.view('index.html', { items: items });
    }
  }
};

var staticContentRoute = {
	method: 'GET',
	path: '/{path*}',
	config: {
		handler: {
			directory: { path: './app', listing: false, index: false }
		}
	}
};


var cartItems = [];
var currentItem = {};
var inCart = false;
var addToCartRoute = {
  method: 'POST',
  path: '/addToCart',
  config: {
    handler: function(request) {
	    currentItem = request.payload;
	    currentItem.amount = parseInt(request.payload.amount);

	    // Find the item that was added based on the id and attach
	    // its name and price to the object that will be saved in
	    // the cartItems array
	    for (var i=0; i<items.length; i++) {
        if(items[i].id == currentItem.id) {
          currentItem.title = items[i].title;
          currentItem.price = items[i].price;
	        currentItem.totalCost = parseFloat(currentItem.price) * parseInt(currentItem.amount);
        }
      }

	    // If there are already items in the cart perform a check
	    // to see if the current item is already in the cart. In this
	    // case just increment the amount by 1. If it is not in the cart
	    // then added it in the cartItems array.
	    if(cartItems.length != 0) {
		    inCart = false;
		  	for(var j=0; j<cartItems.length; j++) {
					if(currentItem.id == cartItems[j].id) {
						inCart = true;
						cartItems[j].amount += parseInt(currentItem.amount);
						cartItems[j].totalCost = parseFloat(currentItem.price) * parseInt(cartItems[j].amount);
					}
			  }
		    if(!inCart) {
			    cartItems.push(currentItem);
		    }
	    }
	    // If the cartItems array is empty then we add the currentItem
	    // without performing the check described above.
	    else {
		    cartItems.push(currentItem);
	    }

	    request.reply.view('index.html', {items: items, cartItems: cartItems });
	    //request.reply.redirect('/', {items: items, cartItems: cartItems });
    }
  }
};

module.exports = [indexRoute, staticContentRoute, addToCartRoute];