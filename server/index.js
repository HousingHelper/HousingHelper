// DEPENDENCIES //
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

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
var userCtrl = require('./controllers/userCtrl')
var serviceRequestsCtrl = require('./controllers/serviceRequestsCtrl')

// SERVICES //
var passport = require('./services/passport');

// POLICIES //
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
    console.log('not authed');
    return res.status(401).send();
  }else{
    console.log('authed');
    return next();
  }
};

var isAdmin = function(req, res, next) {
	if (req.user.isadmin) {
		next();
	} else {
		return res.status(401)
			.send();
	}
};

var isSuperUser = function(req, res, next) {
	if (req.user.issuperuser) {
		next();
	} else {
		return res.status(401)
			.send();
	}
};


// Session and passport //
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


// ENDPOINTS //
app.post('/api/register', userCtrl.register);
app.get('/api/me', isAuthed, userCtrl.me);
// app.get('/faq/:adminId',adminCtrl.getAllFaqs)
app.get('/api/superuser/adminMain', adminCtrl.getSuperUserInfo)
app.get('/api/admin/adminMain', adminCtrl.getAdminInfo)

// app.get('/apartments/:aptId', adminCtrl.getRenterByAptId)
// app.get('/apartments/serviceRequests/:id', serviceRequestsCtrl.getAllServiceRequestsByAptId)
// app.get('/unassignedRenters/:adminId', adminCtrl.getAllUnassignedRenters)
// app.get('/availableRooms/:adminId', adminCtrl.getAvailableRooms)
// app.get('/renterAcc/:id', renterCtrl.getRenterAccById)
// app.get('/renterAccApt/:id', renterCtrl.getRentersAccApt)
// app.get('/renterAccServReq/:id', renterCtrl.getRentersAccServReq)
// app.get('/allgroups/:adminId', adminCtrl.getAllGroups)
// app.get('/serviceRequests/:adminId', adminCtrl.getAllServiceRequests)

// POST//
// app.post('/createfaq/:adminid', adminCtrl.createFaq)
// app.post('/creategroup/:adminid', adminCtrl.createGroup)


// LISTEN //
var port = config.PORT
app.listen(port, function() {
  console.log('listening on port ', port);
});
