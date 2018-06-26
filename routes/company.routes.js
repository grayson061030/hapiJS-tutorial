'use strict';

const CompanyController = require('../controllers/company.controller');
const Joi = require('joi');

// validate schema
const schema = Joi.object().keys({
    name: Joi.string().required(),
    city: Joi.string().optional(),
    address: Joi.string().optional(),
});

module.exports = [
    {
        path: '/api/companies',
        method: 'POST',
        handler: CompanyController.create,
        config: {
            validate: {
                payload: schema
            }
        }
    },
    {
        path: '/api/companies/{id}',
        method: 'GET',
        handler: CompanyController.findById,
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            }
        }
    },
    {
        path: '/api/companies/{id}',
        method: 'PUT',
        handler: CompanyController.update,
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            }
        }
    },
    {
        path: '/api/companies/{id}',
        method: 'DELETE',
        handler: CompanyController.delete,
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            }
        }
    },
    {
        path: '/api/companies',
        method: 'GET',
        config: {
            handler: CompanyController.findAll,
            response: {
                schema: Joi.array().items(schema),
                sample: 50
            }
        }
    }
];