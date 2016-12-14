var app = require('./../index')
var db = app.get('db')

module.exports = {
  getAllServiceRequestsByAptId: function (req, res) {
    var sr = req.params
    var admin = req.user
    db.get_one_apt_servReq([admin.id, sr.id], function (err, serviceRequests) {
      res.status(200).json(serviceRequests)
    })
  },

  getAllServReqsbyLoggedInUser: function (req, res) {
    var admin = req.user
    console.log('admin: ', admin);
    if (admin.issuperuser) {
      db.get_all_serv_reqs_by_superuser([admin.orgid], function (err, users) {
        res.status(200).send(users)
      })
    }
    else if (admin.isadmin) {
      db.get_all_serv_reqs_by_admin([admin.citiesid], function (err, users) {
        res.status(200).send(users)
      })
    }
  },

  getAllNotesForServReqs: function(req, res) {
    var admin = req.user
    if (admin.issuperuser) {
      db.get_all_servreq_notes_by_superuser([admin.orgid], function (err, users) {
        res.status(200).send(users)
      })
    }
    else if (admin.isadmin) {
      db.get_all_servreq_notes_by_admin([admin.citiesid], function (err, users) {
        res.status(200).send(users)
      })
    }
  },

  fakeMakeSvcRq: function(req, res, next){
    var user = req.user;
    var note = req.body.note;
    var citiesid = req.body.citiesid;
    var currenttime = new Date().toLocaleDateString();

    db.create_serviceRequest([currenttime, req.body.request, req.body.type, req.body.permissions,'received', true, req.body.renterid, req.body.aptid, req.body.citiesid, user.orgid], function(err, response){
      var coolness = response;

      db.get_servreq_by_id([coolness[0].id], function(req, req, next){

        db.create_sr_note([note, coolness[0].id, user.orgid, citiesid, currenttime], function(err, response) {
          res.status(200).send(response)
        })
      })

    })
  }





}
