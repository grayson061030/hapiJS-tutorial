'use strict';

const hapi = require('hapi');
const server = new hapi.Server();
const mongoose = require('mongoose');
const mongo_db_uri = 'mongodb://localhost:27017/hapi_db';
mongoose.connect(mongo_db_uri,{

});
mongoose.connection.on('connected',()=>{
    console.log(`app is connected to ${mongo_db_uri}`);
});

mongoose.connection.on('error',err=>{
    console.log('error while connecting to mongodb',err);
});

server.connection({host:'localhost',port: '3000'});


server.route({
    path: '/',
    method: 'GET',
    handler(req,reply) {
        reply('Welcome to Hapijs course');
    }
});


const Company = require('./models/company.model');
server.route({
    path: '/api/companies',
    method: 'POST',
    handler(req,reply) {
        // console.log(req.info);
        if(!req.payload.name){
            return reply({error: 'name is required field'}).code(400);
        }
        Company.create({
            name: req.payload.name,
            city: req.payload.city,
            address: req.payload.address
        },(err,savedCompany)=>{
            if(err){
                return reply(err).code(500);
            }
            return reply.response(savedCompany);
        });
    }
});

server.route({
    path: '/api/companies',
    method: 'GET',
    handler(req,reply){
        Company.find({},(err,companies)=>{
            if(err){
                return reply(err).code(404);
            }
            return reply.response(companies);
        });
    }
});
server.route({
    path: '/api/companies/{id}',
    method: 'GET',
    handler(req,reply){
        if(!req.params.id){
            return reply({error: 'id is required param'}).code(400);
        }
        Company.findById(req.params.id,(err,company)=>{
           if(err){
               return reply(err).code(404);
           }
           return reply.response(company);
        });
    }
});

server.route({
    path: '/api/companies/{id}',
    method: 'PUT',
    handler(req,reply){
        if(!req.params.id){
            return reply({error: 'id is required param'}).code(400);
        }
        let attributes = {};
        if(req.payload.name){
            attributes.name = req.payload.name;
        }
        if(req.payload.city){
            attributes.city = req.payload.city;
        }
        if(req.payload.address) {
            attributes.address = req.payload.address;
        }
        Company.findByIdAndUpdate(req.params.id, attributes,{new: true},(err,company) => {
           if(err) {
               return reply(err).code(500);
           }
           return reply.response(company);
        });
    }
});

server.route({
    path: '/api/companies/{id}',
    method: 'DELETE',
    handler(req,reply){
        if(!req.params.id){
            return reply({error: 'id is required param'}).code(400);
        }
        Company.findByIdAndRemove(req.params.id,(err,result)=>{
            if(err){
                return reply(err).code(500);
            }
            return reply.response({message: `company has deleted with id ${req.params.id}`});
        })
    }
})

server.start(err=> {
    if (err){
        throw err;
    }
    console.log(`Server Running at ${server.info.port}`);
});
