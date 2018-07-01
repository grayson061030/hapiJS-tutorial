const hapi = require('hapi');
const server = new hapi.Server();
const plugins = require('./config/plugins');

server.connection({host:'localhost',port: '3000'});

// root route
server.route({
    path: '/',
    method: 'GET',
    handler(req,reply) {
        reply('Welcome to HapiJs Tutorial');
    }
});

//plugins [swagger,mongoose]
server.register(plugins,(err) => {
    if(err) {
        throw err;
    }
    server.start(err=> {
        if (err){
            throw err;
        }
        console.log(`Server Running at ${server.info.port}`);
    });
});
