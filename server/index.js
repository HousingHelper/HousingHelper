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
var serviceRequestCtrl = require('./controllers/serviceRequestCtrl')



// SERVICES //
// var passport = require('./services/passport');




// ENDPOINTS //
app.get('/apartments/', adminCtrl.getAllApartments)
app.get('/faq',adminCtrl.getAllFaqs)
app.get('/adminMain/:id', adminCtrl.getAptsByAdminId)
// app.get('/apartments/:id', adminCtrl.getRenterByAptId)
// app.get('/adminMain', adminCtrl.getAdmin)
// app.get('/renter', renterCtrl.getOneRenter)

// app.get('/serviceRequests', serviceRequestCtrl.getAllServiceRequests)
// app.get('/unassignedRenters', adminCtrl.getAllUnassignedRenters)
// app.get('/renters', renterCtrl.getAllRenters)


// LISTEN //
var port = config.PORT
app.listen(port, function() {
  console.log('listening on port ', port);
});
