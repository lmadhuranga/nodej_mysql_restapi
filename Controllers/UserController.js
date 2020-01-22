'use strict';

var User = require('../Models/UserModel.js');

exports.list_all_users = function(req, res) {
  User.getAllUser(function(err, users) {
    User.getAllCars(function(err, cars) {  
      if (err)
      res.send(err);
      const outPutData = {
        'users': users,
        'cars': cars,
      }
      res.send(outPutData);
    });
  });
}; 