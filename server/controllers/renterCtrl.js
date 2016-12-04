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
  }







}
