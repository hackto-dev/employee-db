const { Router } = require('express');
const employeeRouter = require('../resources/employee.router');

const rootRouter = Router();

rootRouter.use('/employee',employeeRouter);

module.exports = rootRouter