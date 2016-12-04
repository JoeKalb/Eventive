var mongoose = require('mongoose');
var Event = mongoose.model('Event');

module.exports.eventRead = function(req, res) {
	Event.find(function(err, events){
		if (err) res.send(err);
		else res.status(200).json(events);
	});
}

module.exports.singleEventRead = function(req, res) {
	Event.findById(req.params.event_id, function(err, event){
		if (err) res.send(err);
		else res.status(200).json(event);
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
	if (!req.params.event_id) {
		res.status(404).json({
			"message": "Event not found"
		});
	} else {
		Event
			.findById(req.params.event_id, function(err, event) {
				event.attendees.push(req.body);

				event.save(function(err){
					if (err) res.send(err);
					else res.status(200).json(event);
				})
			});	
	}
}

module.exports.eventRemoveAttendee = function(req, res) {
	if (!req.params.event_id) {
		res.status(404).json({
			"message": "Event not found"
		});
	} else {
		Event
			.findById(req.params.event_id, function(err, event) {
				if (err) res.send(err);
				var user = event.attendees.indexOf(req.body._id);
				event.attendees.splice(user, 1);

				event.save(function(err) {
					if (err) res.send(err);
					else res.status(200).json(event);
				})
			});
	}
}