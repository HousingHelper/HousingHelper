// DEVMOUNTAIN AUTH //
const Devmtn = require('devmtn-auth');
const DevmtnStrategy = Devmtn.Strategy;
const config = require('./../config')
const DevMtnPassportCtrl = require('./../controllers/DevMtnPassportCtrl')


// PASSPORT //
var passport = require('passport');
var LocalStrategy = require('passport-local')
	.Strategy;

// BCRYPT //
var bcrypt = require('bcryptjs');

// APP //
var app = require('./../index');
var db = app.get('db');

// VERIFY PASSWORD //
function verifyPassword(submitedPass, userPass) {
	return bcrypt.compareSync(submitedPass, userPass);
}

// DevMtn Strategy //
passport.use('devmtn', new DevmtnStrategy({
	app:config.DM_APP,
	client_token: config.DM_AUTH,
	callbackURL: config.DM_CALLBACK,
	jwtSecret: config.DM_SECRET
}, DevMtnPassportCtrl.authLogin))

// RUN WHEN LOGGING IN //
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},
 function(email, password, done) {
	 email = email.toLowerCase();
	db.user_search_email([email], function(err, user) {
		user = user[0];

		// If err, return err
		if (err) {
			console.log(err);
			done(err)
		}

		// If no user if found, return false
		if (!user) return done(null, false);

		// If user is found, check to see if passwords match. If so, return user
		if (verifyPassword(password, user.password)) return done(null, user);

		// If no match, return false
		return done(null, false, {message: 'unable to login'});
	});
}));

// Puts the user on the session
passport.serializeUser(function(user, done) {
	//console.log('passport ser: ', user);
	done(null, user.id);
});
passport.deserializeUser(function(id, done) {
	//console.log('pass deserid: ', id);
	db.user_search_id([id], function(err, user) {
		done(err, user[0]);
	});
});

module.exports = passport;
