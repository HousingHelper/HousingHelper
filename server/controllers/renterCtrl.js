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

  getRenterAccById: function (req, res) {
    var user = req.user[0];

    db.get_one_renter([user.id], function(err, account) {
      res.status(200).json(account)
    })
  },

  getRentersAccApt: function(req, res) {
    var user = req.user[0]

    db.get_renter_apt([user.id], function(err, apt) {
      res.status(200).json(apt)
    })
  },

  getRentersAccServReq: function(req, res) {
    var user = req.user[0]
    db.get_renter_servreq([user.id], function(err, servreq) {
      res.status(200).json(servreq)
    })
  },

  CreateServiceRequest: function(req, res, next ){
    var user = req.user[0];
    var currenttime = new Date().toLocaleDateString();

    db.create_serviceRequest([ currenttime, req.body.request ,req.body.type,req.body.permissions,req.body.status,user.orgid, req.body.aptid ],
      function(err, servreq) {
        res.status(200).json(err)
    })
  },
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

  createRenter: function (res, req, next) {
    var renter = req.body
    console.log('renter: ', renter);
    var admin = req.user[0];
    console.log('admin:, ', admin);
    renter.password = hashPassword(renter.password)

    db.create_renter([renter.email, renter.password, renter,firstname, renter.lastname, renter.dob,
      renter.gender, renter.phone, renter.hometown, renter.private_room, renter.aptid, renter.roomid, renter.carmake,
      renter.carmodel, renter.caryear, renter.leasestart, renter.leaseed, renter.rentamt, renter.checkintime,
      renter.checkouttime, false, false, admin.orgid, admin.citiesid], function (err, response) {
        if (err){
          console.log("createRenter error",err);
          return res.status(401).send(err);
        }
        delete result.password
        res.status(200).json(response);
      })
  }


}
