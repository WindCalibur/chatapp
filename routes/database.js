var User_Message = require('./User_Message');

exports = module.exports = {};

exports.inputMessage = function inputMessage (message) {
	var tempMessage = new User_Message({username: message.username, message: message.message});
	tempMessage.save(function(err) {
		  if (err) throw err;
  		  console.log('Message saved successfully!');
	});

	User_Message.find({}, function(err, msgs) {
		if (err) throw err;
	  // object of all the users

	  msgs.forEach(function(entry) {
	  	  //console.log(entry.message);
	  	  //console.log(entry.username);
	  });
  	});

}
/*
exports.retrieveMessages = function retrieveMessages () {
	var messages = [];
	User_Message.find({}, function(err, msgs) {
		if (err) throw err;
	  // object of all the users
	  	  msgs.forEach(function(entry) {
	  	  messages.push({username: entry.username, message: entry.message});
	  	  //console.log(entry.message);
	  	  //console.log(entry.username);
	  	  console.log(messages);
	  });
  	});
  	//console.log(messages);
  	return messages;
}
*/