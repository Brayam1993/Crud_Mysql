const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Retrieve all employees
router.get('/', employeeController.findAll);

module.exports = router;
