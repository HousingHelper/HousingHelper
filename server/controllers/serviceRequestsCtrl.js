var app = require('./../index')
var db = app.get('db')

module.exports = {
  getAllServiceRequestsByAptId: function (req, res) {
    var sr = req.params
    db.get_one_apt_servReq([sr.id], function (err, serviceRequests) {
      res.status(200).json(serviceRequests)
    })
  }







}
