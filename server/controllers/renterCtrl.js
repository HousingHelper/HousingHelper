var app = require('./../index')
var db = app.get('db')

module.exports = {

  getRenterAccById: function (req, res) {
    var user = req.user[0]

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
      // delete admin.password;
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
      // delete admin.password;
      res.status(200).json(faq);
    });
  }
}
