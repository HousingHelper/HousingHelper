var app = require('./../index');
var db = app.get('db');

module.exports = {
  authFailure: {failureRedirect: '/'},
  authSuccess: function (req, res) {
    console.log('user:',req.user);
    res.redirect('/#/account')
  },

  authLogout: function (req, res) {
    res.logout()
    res.redirect('/')
  },

  authLogin: function (jwtoken, user, done) {
    //console.log('authloginuser: ', user);
    db.users.findOne({email: user.email}, function (err, userResult) {
      // console.log('userREsult: ',userResult);
      if(err){
        console.log(err);
        return done(err)
      }

      if (userResult) {
        return done(null, userResult)

      }

      if (!userResult) {
        db.users.insert({email: user.email, firstname:user.first_name, lastname: user.last_name, isadmin:false, issuperuser:false, orgid:1, citiesid:1}, function (err, user) {
          //console.log('afterinsertuser: ',user, '\n\n');
          done(null, user)
        })
      }
    })

  }



}
