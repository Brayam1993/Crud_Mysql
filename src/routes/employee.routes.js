
const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Create a new employee
router.post('/', employeeController.create);

module.exports = router
