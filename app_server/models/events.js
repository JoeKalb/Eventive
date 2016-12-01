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
		type: mongoose.Schema.Types.ObjectId,
		required: false
	}],
}, {versionKey: false});

mongoose.model('Event', eventSchema);