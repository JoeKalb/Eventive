var mongoose = require('mongoose');
var Event = mongoose.model('Event');

module.exports.eventRead = function(req, res) {
	Event.find(function(err, events){
		if (err) res.send(err);
		res.status(200).json(events);
	});
}

module.exports.eventPost = function(req, res) {
	var event = new Event();

	event.eventname = req.body.eventname;
	event.companyname = req.body.companyname;
	event.datetime = req.body.datetime;
	event.address = req.body.address;

	event.save(function(err) {
		if (err) res.send(err);
		else res.status(200).json(event);
	});
}

module.exports.eventAddAttendee = function(req, res) {
	if (!req.params._id) {
		res.status(404).json({
			"message": "Event not found"
		});
	} else {
		Event
			.findById(req.params._id)
			.params.attendees.push(req.body._id)
			.exec(function(err, event) {
				res.status(200).json(event);
			}); 
	}
}