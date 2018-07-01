const CandidateController = require('./candidate.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/candidates',
        method: 'GET',
        config: {
            handler: CandidateController.find,
            tags: ['api','Candidate'],
            description: 'Find all Candidates',
            notes: 'Response all Candidates'
        }
    },
    {
        path: '/candidates',
        method: 'POST',
        config: {
            handler: CandidateController.create,
            validate: {
                payload: Joi.object().keys({
                    first_name: Joi.string().required(),
                    last_name: Joi.string().required(),
                    email: Joi.string().required(),
                    company: Joi.string().required(),
                })
            },
            tags: ['api','Candidate'],
            description: 'Created new Candidate',
            notes: 'Response created Candidate'
        }
    }
];