'use strict';
const Employee = require('../models/employee.model');

exports.findById = function(req, res) {
  Employee.findById(req.params.id, function(err, employee) {
      if (err)
      res.send(err);
      res.json(employee);
    });
  };
