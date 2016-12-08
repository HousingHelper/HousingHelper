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

//_________________GET (READ) ________________________

  getRenterAccById: function (req, res) {
    var user = req.user;

    db.get_one_renter([user.id], function(err, account) {
      res.status(200).json(account)
    })
  },

  getRentersAccApt: function(req, res) {
    var user = req.user

    db.get_renter_apt([user.id], function(err, apt) {
      res.status(200).json(apt)
    })
  },

  getRentersAccServReq: function(req, res) {
    var user = req.user
    db.get_renter_servreq([user.id], function(err, servreq) {
      res.status(200).json(servreq)
    })
  },

	//_________________POST (CREATE) ________________________

  CreateServiceRequest: function(req, res, next ){
    var user = req.user;
    var currenttime = new Date().toLocaleDateString();

    db.create_serviceRequest([ currenttime, req.body.request ,req.body.type,req.body.permissions,req.body.status,user.orgid, req.body.aptid ],
      function(err, servreq) {
        res.status(200).json(err)
    })
  },

	createRenter: function (req, res, next) {
    var renter = req.body
    var admin = req.user;
    renter.password = hashPassword(renter.password)

    db.create_renter([renter.email, renter.password, renter.firstname, renter.lastname, renter.dob,
      renter.gender, renter.phone, renter.hometown, renter.private_room, renter.aptid, renter.roomid, renter.carmake,
      renter.carmodel, renter.caryear, renter.leasestart, renter.leaseend, renter.rentamt, renter.checkintime,
      renter.checkouttime, false, false, admin.orgid, admin.citiesid], function (err, response) {
        if (err){
          console.log("createRenter error",err);
          return res.status(401).send(err);
        }
        delete response.password
        res.status(200).json(response);
      })
  },

	//_________________PUT (UPDATE) ________________________

  updateUser : function(req,res,next){
    var update = req.body;
    var key={};
   key.id =  update.id;
    db.users.save(key,update, function(err, faq){
      if (err){
        console.log("createapt error",err);
        return res.status(401).send(err);
      }
      res.status(200).json(faq);
    });
  },

  updateServRequest: function(req, res , next){
    var update = req.body;
    var key={};
   key.id =  update.id;
    db.servreqs.save(key,update, function(err, faq){
      if (err){
        console.log("createapt error",err);
        return res.status(401).send(err);
      }
      res.status(200).json(faq);
    });
  },

	updateUserAccountInfo: function (req, res, next) {
	  var update = req.body
		var user = req.user
		db.update_user_account_info([update.email, update.phone, update.carmake, update.carmodel, user.id], function (err, result) {
		  if (err) {
		  	console.log(err);
		  }
			res.status(200).send('User Account Information Successfully Updated!')
		})
	},

	updateUserPassword: function (req, res, next) {
	  var update = req.body
		var user = req.user
		update.password = hashPassword(update.password)
		db.update_user_password([update.password, user.id], function (err, result) {
			if (err) console.log(err);
			res.status(200).send('User Password Successfully Updated!')
		})
	}




}
