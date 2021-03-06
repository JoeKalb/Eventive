var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
	secret: 'PINOT',
	userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlEvent = require('../controllers/allevents');

router.get('/', function (req, res){
	res.json({message: 'The server is working!'});
});
// profile connection
router.get('/profile', auth, ctrlProfile.profileRead);
router.put('/profile/:profile_id', auth, ctrlProfile.profileEdit);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// events 
router.get('/events', ctrlEvent.eventRead);
router.get('/events/:event_id', ctrlEvent.singleEventRead);
router.post('/events', auth, ctrlEvent.eventPost); // only for organizers
router.put('/events/:event_id/edit', auth, ctrlEvent.editEvent); // edit event for organizer
router.put('/events/:event_id', auth, ctrlEvent.eventAddAttendee);
router.put('/events/:event_id/remove', auth, ctrlEvent.eventRemoveAttendee);
router.put('/events/:event_id/checkin', auth, ctrlEvent.checkInAttendee); // change checkin boolean to true
router.get('/events/profile/:profile_id', auth, ctrlEvent.getProfileEvents); // get events for user
router.get('/events/company/:company_id', auth, ctrlEvent.getCompanyEvents);

module.exports = router;