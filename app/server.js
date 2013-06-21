var Hapi = require('hapi'),
    routes = require('./routes'),
    PORT = 8080;

var options = {
    views: {
        path: 'app/templates',
        engines: {  
            html: 'handlebars'
        }
    },
    debug: {
      request: ['error', 'uncaught']
    }
};

var server = Hapi.createServer('0.0.0.0', PORT, options);
server.addRoutes(routes);
server.start(function() {
  var open = require('open');
  open('http://localhost:' + PORT + '/');
});
console.log('Hapi server running in port ' + PORT);
