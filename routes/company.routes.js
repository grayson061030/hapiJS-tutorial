'use strict';

const CompanyController = require('../controllers/company.controller');

module.exports = [
    {
        path: '/api/companies',
        method: 'POST',
        handler: CompanyController.create
    },
    {
        path: '/api/companies/{id}',
        method: 'GET',
        handler: CompanyController.findById
    },
    {
        path: '/api/companies/{id}',
        method: 'PUT',
        handler: CompanyController.update
    },
    {
        path: '/api/companies/{id}',
        method: 'DELETE',
        handler: CompanyController.delete
    },
    {
        path: '/api/companies',
        method: 'GET',
        handler: CompanyController.findAll
    }
];