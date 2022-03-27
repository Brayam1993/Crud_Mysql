
'use strict';
const Employee = require('../models/employee.model');

exports.create = function(req, res) {
  const new_employee = new Employee(req.body);
  //handles null error
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Employee.create(new_employee, function(err, employee) {
      if (err)
      res.send(err);
      res.json({error:false,message:"Employee added successfully!",data:employee});
    });
  }
};



