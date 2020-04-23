const { Router } = require('express');

const { createEmployee, getEmployees } = require('./employee.controller');

const studentRouter = Router();

studentRouter.post('/create',createEmployee);
studentRouter.get('/employees',getEmployees);

module.exports = studentRouter