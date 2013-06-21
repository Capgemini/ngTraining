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

module.exports = [indexRoute];