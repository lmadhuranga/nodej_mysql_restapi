'user strict';
var sql = require('./db.js');

//User object constructor
var User = function(user){
  this.user = user.user;
  this.status = user.status;
  this.created_at = new Date();
}; 

User.getAllUser = function (result) {
  sql.query("Select * from users", function (err, res) {
    
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('users : ', res);  
      
      result(null, res);
    }
  });   
};

User.getAllCars = function (result) {
  sql.query("Select * from car", function (err, res) {
    
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('users : ', res);  
      
      result(null, res);
    }
  });   
}; 

module.exports= User;