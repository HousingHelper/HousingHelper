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




// SERVICES //
// var passport = require('./services/passport');




// ENDPOINTS //






// LISTEN //
var port = config.PORT
app.listen(port, function() {
  console.log('listening on port ', port);
});
