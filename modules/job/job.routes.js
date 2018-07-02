const JobController = require('./job.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/jobs',
        method: 'GET',
        config: {
            handler: JobController.find,
            tags: ['api','Job'],
            description: 'Get all the Jobs',
            notes: 'Response all the Jobs with Company',
            validate: {
                headers: Joi.object({
                    'authorization' : Joi.string().required()
                }).unknown()
            }
        }
    },
    {
        path: '/jobs',
        method: 'POST',
        config: {
            handler: JobController.create,
            validate: {
                payload: Joi.object().keys({
                    title: Joi.string().required(),
                    company: Joi.string().required()
                }),
                headers: Joi.object({
                    'authorization' : Joi.string().required()
                }).unknown()
            },
            description: 'Created new Job',
            tags: ['api','Job'],
            notes: 'Response new created Job'
        }
    },
];