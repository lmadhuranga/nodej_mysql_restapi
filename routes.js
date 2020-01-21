'use strict';
module.exports = function(app) {
  var UsersController = require('./Controllers/UserController');

  // UsersController Routes
  app.route('/') 
    .get(UsersController.list_all_users)
   
  // UsersController Routes
  app.route('/users')
    .get(UsersController.list_all_users)
    .post(UsersController.create_a_user);
   
  app.route('/users/:userId')
  .get(UsersController.read_a_user)
  .put(UsersController.update_a_user)
  .delete(UsersController.delete_a_user);
  };