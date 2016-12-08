var app = require('./../index')
var db = app.get('db')
const bcrypt = require('bcryptjs')

// HASH PASSWORD //
function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

module.exports = {

  // REGISTER //
  register: function(req, res, next) {
    var user = req.body.user;

    user.password = hashPassword(user.password);

    user.email = user.email.toLowerCase();

      if(user.issuperuser) { //via checkboxes on front end
          var org = req.body.org;
          db.create_organization([org.org_name, org.org_address, org.org_city, org.org_state, org.org_zipcode, org.org_phone, org.org_website], function (err, newOrg) {
            db.user_register([user.email, user.password, user.isadmin, user.issuperuser, newOrg[0].id], function(err, newUser) {
              if (err) {
                console.log("Registration err: ", err);
                return res.status(401).send(err);
              }
            res.status(200).send('New user and organization created successfully!', newUser, newOrg);
          })
        })
      }else{
        var admin = req.user //req.user admin.orgid
        db.user_register([user.password, user.email, user.isadmin, admin.orgid, user.issuperuser], function(err, newUser) {
					if (err) {
            console.log("Registration err: ", err);
            return res.status(401).send(err);
          }
      res.status(200).send(newUser);
      })
    }
  },

  me: function(req, res, next) {
    if (!req.user) {
      res.status(401).send('User is not logged in');
    }
    var user = req.user;
    delete user.password;
    res.status(200).send(user);
  },


  getRenterById: function (req, res) {
    db.get_one_renter([req.params.id], function(err, account) {
      res.status(200).json(account)
    })
  },

  getRentersApt: function(req, res) {
    db.get_renter_apt([req.params.id], function(err, apt) {
      res.status(200).json(apt)
    })
  },

  getRentersServReq: function(req, res) {
    db.get_renter_servreq([req.params.id], function(err, servreq) {
      res.status(200).json(servreq)
    })
  },

  update: function(req, res, next) {
      var updateUser = req.body;

      updateUser.id = req.user.id;

      db.users.save(updateUser, function(err, user) {
        if (err) {
  				console.log('User update error', err);

  				return res.status(401)
  					.send(err);
  			}

        req.user = user;

        delete user.password;

        res.status(200).send(user);
      })
    }
}
