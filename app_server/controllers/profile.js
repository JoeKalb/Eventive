var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {
	// if no user ID exists in the JWT return 401
	if (!req.payload._id) {
		res.status(401).json({
			"message" : "UnauthorizedError: private profile"
		});
	} else {
		// continue otherwise
		User
			.findById(req.payload._id)
			.exec(function(err, user) {
				res.status(200).json(user);
			});
	}
};