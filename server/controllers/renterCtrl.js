var app = require('./../index');
var db = app.get('db');
const bcrypt = require('bcryptjs');

// HASH PASSWORD //
function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

module.exports = {

//_________________GET (READ) ________________________

  getRenterAccById: function (req, res) {
    var user = req.user;

    db.get_one_renter([user.id], function(err, account) {
      res.status(200).json(account);
    })
  },

  getRentersAccApt: function(req, res) {
    var user = req.user;

    db.get_renter_apt([user.id], function(err, apt) {
      res.status(200).json(apt);
    })
  },

  getRentersAccServReq: function(req, res) {
    var user = req.user;
    db.get_renter_servreq([user.id], function(err, servreq) {
      res.status(200).json(servreq);
    })
  },

	getAdminByLoggedInUser: function (req, res) {
	  var user = req.user;
		db.get_all_admins_by_citiesid([user.citiesid, user.aptid], function (err, admin) {
		  if (err) {
		  	res.status(500).send(err)
		  }
			res.status(200).send(admin)
		})
	},

	getUserByUserId: function(req, res, next) {
    db.users.find({id: req.params.id}, function(err, user) {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(user)
    })
  },


	//_________________POST (CREATE) ________________________

  createServiceRequest: function(req, res, next ){
    var user = req.user;
    var currenttime = new Date().toLocaleDateString();

    db.create_serviceRequest([currenttime, req.body.request, req.body.type, req.body.permissions,'received', true, user.id, user.aptid, user.citiesid, user.orgid],
      function(err, servreq) {
        // if (err) {
        //   res.status(500).send(err)
        // }
        res.status(200).send(servreq);
    })
  },




	createRenter: function (req, res, next) {
    var renter = req.body;
    var admin = req.user;
    renter.password = hashPassword(renter.password);

    db.create_renter([renter.email, renter.password, renter.firstname, renter.lastname, renter.dob,
      renter.gender, renter.phone, renter.hometown, renter.private_room, renter.aptid, renter.roomid, renter.carmake,
      renter.carmodel, renter.caryear, renter.leasestart, renter.leaseend, renter.rentamt, renter.checkintime,
      renter.checkouttime, false, false, admin.orgid, admin.citiesid], function (err, response) {
        if (err){
          console.log("createRenter error",err);
          return res.status(401).send(err);
        }
        delete response.password;
        res.status(200).json(response);
      })
  },

	//_________________PUT (UPDATE) ________________________


  updateUser : function(req,res,next){
  	var update = req.body;
  	var key= {};
   	key.id = update.id;
    db.users.update(key, update, function(err, user){
      if (err){
        console.log("update user error",err);
        return res.status(401).send(err);
      }
      res.status(200).send();
    });
  },

  updateServRequest: function(req, res , next){
    var update = req.body;
    var key = {};
   	key.id = update.id;

    db.servreqs.update(key,update, function(err, sr){
      if (err){
        console.log("update sr error",err);
        return res.status(401).send(err);
      }
			console.log('sr: ' ,sr);
      res.status(200).send();
    });
  },

	updateUserAccountInfo: function (req, res, next) {
	  var update = req.body;
		var user = req.user;
		db.update_user_account_info([update.email, update.phone, update.carmake, update.carmodel, user.id], function (err, result) {
		  if (err) {
		  	console.log('err',err);
		  }
			res.status(200).send();
		})
	},

	updateUserPassword: function (req, res, next) {
	  var update = req.body;
		var user = req.user;
		update.password = hashPassword(update.password);
		db.update_user_password([update.password, user.id], function (err, result) {
			if (err) console.log('err: ', err);
			res.status(200).send();
		})
	}




}
