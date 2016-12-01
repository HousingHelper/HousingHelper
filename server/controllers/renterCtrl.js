var app = require('./../index')
var db = app.get('db')

module.exports = {

  getRenterAccById: function (req, res) {
    db.get_one_renter([req.params.id], function(err, account) {
      res.status(200).json(account)
    })
  },

  getRentersAccApt: function(req, res) {
    db.get_renter_apt([req.params.id], function(err, apt) {
      res.status(200).json(apt)
    })
  },

  getRentersAccServReq: function(req, res) {
    db.get_renter_servreq([req.params.id], function(err, servreq) {
      res.status(200).json(servreq)
    })
  }







}
