var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	eventname: {
		type: String,
		required: true
	},
	companyname: {
		type: String,
		required: true
	},
	datetime: {
		type: Date,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	attendees: [{
		attendeeid: mongoose.Schema.Types.ObjectId,
		attendeename: String, 
		attendeenumber: String, 
		_id: false
	}],
}, {versionKey: false});

mongoose.model('Event', eventSchema);