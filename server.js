'use strict';

const hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const MongoosePlugin = require('./plugins/mongoose.plugin');
const CompanyModule = require('./modules/company.module');
const server = new hapi.Server();
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
server.register([
    {
        register: MongoosePlugin,
        options: {
            mongo_db_uri: 'mongodb://localhost:27017/hapi_db'
        }
    },
    Inert,
    Vision,
    {
        register: HapiSwagger,
        options: {
            info: {
                title: 'API Documentation',
                version: '0.0.1'
            }
        }
    },
    CompanyModule
], (err) => {
    if(err) {
        throw err;
    }
});

server.start(err=> {
    if (err){
        throw err;
    }
    console.log(`Server Running at ${server.info.port}`);
});
