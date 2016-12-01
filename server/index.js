// DEPENDENCIES //
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport')

// CONFIG //
const config = require('./config');

// EXPRESS //
var app = module.exports = express();
app.use(cors());
app.use(express.static(__dirname+'./../public'));
app.use(bodyParser.json());

// MASSIVE //
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
})
app.set('db', massiveServer)// MUST come after app = express()

// DB //
var db = app.get('db')

// CONTROLLERS //
var adminCtrl = require('./controllers/adminCtrl')
var renterCtrl = require('./controllers/renterCtrl')
var serviceRequestsCtrl = require('./controllers/serviceRequestsCtrl')

var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};
// Session and passport //
var LocalStrategy = require('passport-local').Strategy
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
// Passport Endpoints //
app.post('/api/login',passport.authenticate('local', {
	successRedirect: '/api/me'
}));
app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});


// SERVICES //
var passport = require('./services/passport');
//
app.use(passport.initialize());
app.use(passport.session());

// Passport Endpoints //
app.post('/login', passport.authenticate('local', {
	successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});



// ENDPOINTS //
app.get('/faq/:adminId',adminCtrl.getAllFaqs)
app.get('/adminMain/:adminId', adminCtrl.getAptsByAdminId)
app.get('/apartments/:aptId', adminCtrl.getRenterByAptId)
app.get('/apartments/serviceRequests/:id', serviceRequestsCtrl.getAllServiceRequestsByAptId)
app.get('/unassignedRenters/:adminId', adminCtrl.getAllUnassignedRenters)
app.get('/availableRooms/:adminId', adminCtrl.getAvailableRooms)
app.get('/renter/:id', renterCtrl.getRenterById)
app.get('/renterapt/:id', renterCtrl.getRentersApt)
app.get('/renterServReq/:id', renterCtrl.getRentersServReq)
app.get('/allgroups/:adminId', adminCtrl.getAllGroups)
app.get('/serviceRequests/:adminId', adminCtrl.getAllServiceRequests)



// LISTEN //
var port = config.PORT
app.listen(port, function() {
  console.log('listening on port ', port);
});
