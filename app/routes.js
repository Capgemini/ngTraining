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

var addToCartRoute = {
  method: 'POST',
  path: '/addToCart',
  config: {
    handler: function(request) {
      request.reply.redirect('/');
    }
  }
};

module.exports = [indexRoute, addToCartRoute];