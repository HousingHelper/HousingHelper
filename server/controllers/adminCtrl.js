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
    var admin = req.params
    db.faqs.where("adminid=$1", [req.params.adminId], function (err, faqs) {
      if (err){
      res.send("error: ", err)
    }
      res.status(200).json(faqs)
    })
  },

  getAptsByAdminId: function (req, res) {
    db.apartments.where("admin_id=$1", [req.params.adminId], function (err,apartments) {
      if(err){
        res.send("error: ", err)
      }
      res.status(200).send(apartments)
    })
  },

  getRenterByAptId: function (req,res) {
    var apartment = req.params
    db.get_one_apt_renters([apartment.aptId], function (err, renters) {
      if(err){
        res.send("error: ", err)
      }
      res.status(200).json(renters)
    })
  },

  getAllUnassignedRenters: function (req, res) {
    var admin = req.params
    db.get_all_unassigned_renters([admin.adminId], function (err, renters) {
      res.status(200).json(renters)
    })
  },

  getAvailableRooms: function (req, res) {
    var admin = req.params
    db.get_all_available_housing([admin.adminId], function (err, rooms) {
      res.status(200).json(rooms)
    })
  },

  getAllGroups: function (req, res) {
    db.get_all_groups([req.params.adminId], function (err, groups) {
      res.status(200).json(groups)
    })
  },

  getAllServiceRequests: function (req, res) {
    db.get_all_serv_reqs([req.params.adminId], function (err, servReqs) {
      res.status(200).json(servReqs)
    })
  }







}
