var app = require('./../index')
var db = app.get('db')

module.exports = {

  getAllApartments: function (req, res) {
    db.get_all_apts(function (err, response) {
      console.log(response);
      res.status(200).json(response)
    })
  },

  getAllFaqs: function (req,res) {
    db.get_all_faqs(function (err, faqs) {
      res.status(200).json(faqs)
    })
  },

  getAptsByAdminId: function (req, res) {
    db.apartments.where("admin_id=$1", [req.params.id], function (err,apartments) {
      res.status(200).json(apartments)
    })
  }







}
