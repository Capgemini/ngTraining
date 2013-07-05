var config = require('./app/config');
require('supervisor').run(['-e', 'js|html', './app/server.js']);

setTimeout(function() {
  var open = require('open');
  open('http://localhost:' + config.PORT + '/');
}, 500);