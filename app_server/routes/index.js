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

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// events 
router.get('/events', ctrlEvent.eventRead);
router.post('/events', auth, ctrlEvent.eventPost);
router.put('/events/:id', auth, ctrlEvent.eventAddAttendee);

module.exports = router;