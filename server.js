const hapi = require('hapi');
const server = new hapi.Server();
const plugins = require('./config/plugins');
const JwtService = require('./services/jwt.service');

server.connection({host:'localhost',port: '3000'});


server.register(plugins,(err) => {
    if(err) {
        throw err;
    }
    server.start(err=> {
        if (err){
            throw err;
        };
        server.auth.strategy('jwt','jwt',{
            key: '4@#$5234asd',
            verifyOptions: {
                algorithm: ['HS256']
            },
            validateFunc: JwtService.validate
        });

        server.auth.default('jwt');

        console.log(`Server Running at ${server.info.port}`);
    });
});
