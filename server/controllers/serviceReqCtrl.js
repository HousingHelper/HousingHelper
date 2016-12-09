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
    if (admin.issuperuser) {
      db.get_all_serv_reqs_by_superuser([admin.orgid], function (err, users) {
        res.status(200).send(users)
      })
    }
    else if (admin.isadmin) {
      db.get_all_serv_reqs_by_admin([admin.id], function (err, users) {
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
      db.get_all_servreq_notes_by_admin([admin.id], function (err, users) {
        res.status(200).send(users)
      })
    }
  },

  createSRNote: function(req, res) {
    var admin = req.user;
    var currenttime = new Date().toLocaleDateString();
    db.create_sr_note([req.body.note, req.body.servreqid, admin.orgid, req.body.citiesid, currenttime], function(err, response) {
      res.status(200).send(response)
    })
  }



}
