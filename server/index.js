// DEPENDENCIES //
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');

// CONFIG //
var config = require('./config');

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



// SERVICES //
// var passport = require('./services/passport');




// ENDPOINTS //
app.get('/faq/:adminId',adminCtrl.getAllFaqs)
app.get('/adminMain/:adminId', adminCtrl.getAptsByAdminId)
app.get('/apartments/:aptId', adminCtrl.getRenterByAptId)
app.get('/apartments/serviceRequests/:id', serviceRequestsCtrl.getAllServiceRequestsByAptId)
app.get('/unassignedRenters/:adminId', adminCtrl.getAllUnassignedRenters)
app.get('/availableRooms/:adminId', adminCtrl.getAvailableRooms)
app.get('/renterAcc/:id', renterCtrl.getRenterAccById)
app.get('/renterAccApt/:id', renterCtrl.getRentersAccApt)
app.get('/renterAccServReq/:id', renterCtrl.getRentersAccServReq)
app.get('/allgroups/:adminId', adminCtrl.getAllGroups)
app.get('/serviceRequests/:adminId', adminCtrl.getAllServiceRequests)



// LISTEN //
var port = config.PORT
app.listen(port, function() {
  console.log('listening on port ', port);
});
