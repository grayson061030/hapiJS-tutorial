const ApplicationController = require('./application.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/applications',
        method: 'GET',
        config: {
            handler: ApplicationController.find,
            description: 'Find all the Application',
            tags: ['api','Application'],
            notes: 'Response all the  Application'
        }
    },
    {
        path: '/applications',
        method: 'POST',
        config: {
            handler: ApplicationController.create,
            validate: {
                payload: Joi.object().keys({
                    hired: Joi.boolean().optional(),
                    job: Joi.string().required(),
                    candidate: Joi.string().required(),
                })
            },
            description: 'Create new Application',
            tags: ['api','Application'],
            notes: 'Response new created Application'
        }
    }
];