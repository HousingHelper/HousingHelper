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
var serviceRequestsCtrl = require('./controllers/serviceReqCtrl')
var renterCtrl = require('./controllers/renterCtrl')
const DevMtnPassportCtrl = require('./controllers/DevMtnPassportCtrl')


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

      //// GET ////
app.get('/api/me', isAuthed, userCtrl.me);
  // FAQ //
app.get('/api/faq', isAuthed, adminCtrl.getAllFaqs)
app.get('/api/faqById', isAuthed, adminCtrl.getFaqByFaqId)
  // HOME //
app.get('/api/superuser/adminMain', isAuthed, adminCtrl.getSuperUserInfo)
app.get('/api/admin/adminMain', isAuthed, adminCtrl.getAdminInfo)
// app.get('/api/adminMain/renters', isAuthed, adminCtrl.getAllApartmentsWithRenters)
app.get('/api/adminMain/apts', isAuthed, adminCtrl.getAllApartmentsByLoggedInUser)
app.get('/api/adminMain/users', isAuthed, adminCtrl.getAllUsersByLoggedInUser)
app.get('/api/adminMain/locations', isAuthed, adminCtrl.getAllLocations)
  // APARTMENTS //
// app.get('/apartments', isAuthed, adminCtrl.getAllApartments)
app.get('/apartments/:id', isAuthed, adminCtrl.getRentersByAptId)
app.get('/api/apartments/:id', isAuthed, adminCtrl.getAptByAptId)

// app.get('/apartments/serviceRequests/:id', isAuthed, serviceRequestsCtrl.getAllServiceRequestsByAptId)
  // UNASSIGNED RENTERS //
app.get('/unassignedRenters', isAuthed, adminCtrl.getAllUnassignedRenters)
app.get('/availableRooms', isAuthed, adminCtrl.getAvailableRooms)
  // RENTER ACCOUNT PAGE //
app.get('/renterAcc', isAuthed, renterCtrl.getRenterAccById)
app.get('/renterAccApt', isAuthed, renterCtrl.getRentersAccApt)
app.get('/renterAccServReq', isAuthed, renterCtrl.getRentersAccServReq)
app.get('/api/renterAccAdmin', isAuthed, renterCtrl.getAdminByLoggedInUser)
// app.get('/api/renterApts', isAuthed, renterCtrl.getRenterApt)
  // GROUPS //
app.get('/allgroups', isAuthed, adminCtrl.getAllGroupsByLoggedInUser)
app.get('/allgroupsinalllocations', isAuthed, adminCtrl.getAllLocations)
app.get('/allgroupsusers', isAuthed, adminCtrl.getAllUsersByLoggedInUser)
app.get('/allgroups/:id', isAuthed, adminCtrl.getGroupByGroupId)
  // SERV REQS //
app.get('/serviceRequests', isAuthed, serviceRequestsCtrl.getAllServReqsbyLoggedInUser)
app.get('/servreqnotes', isAuthed, serviceRequestsCtrl.getAllNotesForServReqs)
app.get('/serviceRequests/:id', isAuthed, adminCtrl.getServReqBySRId)
  // USERS //
app.get('/allusers', isAuthed, adminCtrl.getAllUsersByLoggedInUser)
app.get('/allusersinallgroups', isAuthed, adminCtrl.getAllGroupsByLoggedInUser)
app.get('/api/rooms', isAuthed, adminCtrl.getAllRoomsByLoggedInUser)
app.get('/adminRenters/:id', isAuthed, renterCtrl.getUserByUserId)


        //// PUT ////

app.put('/api/putfaq/:id', isAuthed, adminCtrl.updatefaq)
app.put('/api/putuser/:id', isAuthed, renterCtrl.updateUser)
app.put('/api/groups/:id', isAuthed, adminCtrl.updategroups)
app.put('/api/servRequest/:id', isAuthed, renterCtrl.updateServRequest)
app.put('/api/apartments/:id', isAuthed, adminCtrl.updateApartment)
app.put('/api/updateUserAccountInfo', isAuthed, renterCtrl.updateUserAccountInfo)
app.put('/api/updateUserPassword', isAuthed, renterCtrl.updateUserPassword)


        //// POST ////

app.post('/api/register', userCtrl.register);
app.post('/api/createfaq', isAuthed, adminCtrl.createFaq)
app.post('/api/creategroup', isAuthed, adminCtrl.createGroup)
app.post('/api/serviceRequests', isAuthed, renterCtrl.createServiceRequest)
app.post('/api/apartments', isAuthed, adminCtrl.createApt)
app.post('/api/createlocation', isAuthed, adminCtrl.createLocation)
app.post('/api/renter',isAuthed, renterCtrl.createRenter)
app.post('/api/fake', isAuthed, serviceRequestsCtrl.fakeMakeSvcRq);


        //// Delete ////

app.delete('/api/delete/apartment/:id',isAuthed, adminCtrl.deleteApartment);
app.delete('/api/delete/faq/:id', isAuthed, adminCtrl.deleteFaq);
// app.delete('/api/delete/renter/:id', isAuthed, adminCtrl.deleteRenter);
// app.delete('/api/delete/serviceRequest/:id', isAuthed, adminCtrl.deleteServiceRequest);
app.delete('/api/delete/group/:id', isAuthed, adminCtrl.deleteGroup);
// app.delete('/api/delete/location/:id', adminCtrl.deleteLocation);


        //// DevMtn Passport ////

app.get('/auth/devmtn', passport.authenticate('devmtn'), function (req, res) {  });
app.get('/auth/devmtn/callback', passport.authenticate('devmtn', DevMtnPassportCtrl.authFailure), DevMtnPassportCtrl.authSuccess)
app.get('/auth/logout', DevMtnPassportCtrl.authLogout)

// LISTEN //
var port = config.PORT
app.listen(port, function() {
  console.log('listening on port ', port);
});
