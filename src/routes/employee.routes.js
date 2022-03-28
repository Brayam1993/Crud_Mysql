const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Retrieve a single employee with id
router.get('/:id', employeeController.findById);

module.exports = router;
