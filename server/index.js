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
var renterCtrl = require('./controllers/renterCtrl')

// SERVICES //
var passport = require('./services/passport');

// POLICIES //
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) {
    return res.status(401).send();
  }else{
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
// GET //
app.get('/api/me', isAuthed, userCtrl.me);
app.get('/api/faq',adminCtrl.getAllFaqs)
app.get('/api/superuser/adminMain', adminCtrl.getSuperUserInfo)
app.get('/api/admin/adminMain', adminCtrl.getAdminInfo)
// app.get('/api/adminMain/renters', adminCtrl.getAllApartmentsWithRenters)
app.get('/api/adminMain/apts', adminCtrl.getAllApartmentsByLoggedInUser)
app.get('/api/adminMain/users', adminCtrl.getAllUsersByLoggedInUser)
app.get('/api/adminMain/locations', adminCtrl.getAllLocations)
app.get('/apartments', adminCtrl.getAllApartments)
app.get('/apartments/:id', adminCtrl.getRentersByAptId)
app.get('/apartments/serviceRequests/:id', serviceRequestsCtrl.getAllServiceRequestsByAptId)
app.get('/unassignedRenters', adminCtrl.getAllUnassignedRenters)
app.get('/availableRooms', adminCtrl.getAvailableRooms)
app.get('/renterAcc', renterCtrl.getRenterAccById)
app.get('/renterAccApt', renterCtrl.getRentersAccApt)
app.get('/renterAccServReq', renterCtrl.getRentersAccServReq)
app.get('/allgroups', adminCtrl.getAllGroupsByLoggedInUser)
app.get('/allgroupsinalllocations', adminCtrl.getAllLocations)
app.get('/allgroupsusers', adminCtrl.getAllUsersByLoggedInUser)
app.get('/serviceRequests', adminCtrl.getAllServiceRequests)
app.get('/allusers', adminCtrl.getAllUsersByLoggedInUser)
app.get('/allusersinallgroups', adminCtrl.getAllGroupsByLoggedInUser)
app.get('/api/rooms', adminCtrl.getAllRoomsByLoggedInUser)

// PUT//
// app.put('put', adminCtrl.updateFaq)



app.put('/api/putfaq', adminCtrl.updatefaq)
app.put('/api/putuser', renterCtrl.updateUser)
app.put('/api/groups', adminCtrl.updategroups)
app.put('/api/servRequest', renterCtrl.updateServRequest)
app.put('/api/apartments', adminCtrl.updateApartment)

// POST//
app.post('/api/register', userCtrl.register);
app.post('/api/createfaq', adminCtrl.createFaq)
app.post('/api/creategroup', adminCtrl.createGroup)
app.post('/api/serviceRequests', renterCtrl.CreateServiceRequest)
app.post('/api/apartments', isAuthed, adminCtrl.createApt)
app.post('/api/renter', isAuthed, renterCtrl.createRenter)
// LISTEN //
var port = config.PORT
app.listen(port, function() {
  console.log('listening on port ', port);
});
