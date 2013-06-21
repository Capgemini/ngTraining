var Hapi = require('hapi'),
    routes = require('./routes'),
    config = require('./config');

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

var server = Hapi.createServer('0.0.0.0', config.PORT, options);
server.addRoutes(routes);
server.start(function() {
  console.log('Hapi server running in port ' + config.PORT);
});
