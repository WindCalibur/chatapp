var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: String,
  message: String
});

// the schema is useless so far
// we need to create a model using it
var User_Message = mongoose.model('User_Message', userSchema);

// make this available to our users in our Node applications
module.exports = User_Message;