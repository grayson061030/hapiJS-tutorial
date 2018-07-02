const CompanyController = require('./company.controller');
const Joi = require('joi');

// validate schema
const schema = Joi.object().keys({
    name: Joi.string().required(),
    city: Joi.string().optional(),
    address: Joi.string().optional(),
});

module.exports = [
    {
        path: '/companies',
        method: 'POST',
        config: {
            validate: {
                payload: schema,
                headers: Joi.object({
                    'authorization' : Joi.string().required()
                }).unknown()
            },
            handler: CompanyController.create,
            description: 'Create new Company',
            tags: ['api','Company'],
            notes: 'Response new created Company'
        }
    },
    {
        path: '/companies/{id}',
        method: 'GET',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                }),
                headers: Joi.object({
                    'authorization' : Joi.string().required()
                }).unknown()
            },
            handler: CompanyController.findById,
            tags: ['api','Company'],
            description: 'Find Company By Id',
            notes: 'Response a Company'
        }
    },
    {
        path: '/companies/{id}',
        method: 'PUT',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                }),
                payload: Joi.object().keys({
                    name: Joi.string().optional(),
                    city: Joi.string().optional(),
                    address: Joi.string().optional(),
                }),
                headers: Joi.object({
                    'authorization' : Joi.string().required()
                }).unknown()
            },
            handler: CompanyController.update,
            tags: ['api','Company'],
            description: 'Update Company By Id',
            notes: 'Response update Company'
        }
    },
    {
        path: '/companies/{id}',
        method: 'DELETE',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                }),
                headers: Joi.object({
                    'authorization' : Joi.string().required()
                }).unknown()
            },
            handler: CompanyController.delete,
            tags: ['api','Company'],
            description: 'Find Company By Id',
            notes: 'Response a Company'
        }
    },
    {
        path: '/companies',
        method: 'GET',
        config: {
            handler: CompanyController.find,
            tags: ['api','Company'],
            description: 'Find all the Companies',
            notes: 'Response all the Companies',
            validate: {
                headers: Joi.object({
                    'authorization' : Joi.string().required()
                }).unknown()
            }
        }
    }
];
