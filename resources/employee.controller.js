const Employee = require('../models/employee.model');

const createEmployee = async(req,res) => {
    const newEmployee = new Employee({
        ...req.body
    });

    try {
        const savedEmployee = await newEmployee.save();
        res.json(savedEmployee);
    } catch(err) {
        res.send(500).json(err);
    }
};

const getEmployees = async(req,res) => {
    try {
        const { gender, minSalary=0 } = req.query;

        let filter = {}

        if(minSalary) {
            filter = {
                ...filter,
                salary : { $gt: minSalary }
            }
        }

        if(gender) {
            filter = {
                ...filter,
                gender
            }
        }

        const user = await Employee.find({
            ...filter
        }, {
            name: 1,
            salary: 1,
            gender: 1
        });

        res.json(user);
    } catch(err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createEmployee,
    getEmployees
}