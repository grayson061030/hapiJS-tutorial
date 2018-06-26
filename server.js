'use strict';

const hapi = require('hapi');
const server = new hapi.Server();
const mongoose = require('mongoose');
const mongo_db_uri = 'mongodb://localhost:27017/hapi_db';
const companyRoutes = require('./routes/company.routes');

mongoose.connect(mongo_db_uri);
mongoose.connection.on('connected',()=>{
    console.log(`server is connected to ${mongo_db_uri}`);
});

mongoose.connection.on('error',err=>{
    console.log('Error while connecting to mongodb',err);
});

server.connection({host:'localhost',port: '3000'});


server.route({
    path: '/',
    method: 'GET',
    handler(req,reply) {
        reply('Welcome to HapiJs Tutorial');
    }
});

//routes
server.route(companyRoutes);

server.start(err=> {
    if (err){
        throw err;
    }
    console.log(`Server Running at ${server.info.port}`);
});
