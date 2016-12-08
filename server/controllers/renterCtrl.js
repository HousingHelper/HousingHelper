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

    db.create_serviceRequest([currenttime, req.body.request, req.body.type, req.body.permissions,'received', true, req.body.renterid, req.body.aptid, req.body.citiesid, user.orgid],
      function(err, servreq) {
        // if (err) {
        //   res.status(500).send(err)
        // }
        res.status(200).send(servreq)
    })
  },

///////ALEX MAKES STUFF
makeServiceRequest: function(req, res, next){
  var user = req.user[0];
  var currenttime = new Date().toLocaleDateString();
  // var aptid;
  // var citiesid;
  // var wow;

  // db.get_userid_by_rentersid([req.body.renterid], function(err, response){
  //   var cool = response[0];
  //    aptid =  response[0].aptid;
  //    citiesid = cool.citiesid;
  //   // var wow = {
  //   //   aptid: cool.aptid,
  //   //    citiesid: cool.citiesid
  //   // }
  //    console.log(aptid, citiesid +
  //     "FIRSTTTT");
  // })
// console.log(wow + "second wow");
    db.create_serviceRequest([currenttime, req.body.request, req.body.type, req.body.permissions,'received', true, req.body.renterid, req.body.aptid, req.body.citiesid, user.orgid], function(err, response){
      console.log(response);
      res.status(200).send(response)
    })
  },
////////////////
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
