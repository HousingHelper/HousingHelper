var app = require('./../index')
var db = app.get('db')

module.exports = {

  getAllApartments: function (req, res) {
    var admin = req.user[0]
    db.get_all_admin_apts([admin.id], function (err, response) {
      console.log(response);
      res.status(200).json(response)
    })
  },

  getAllFaqs: function (req,res) {
    var user = req.user[0]
    console.log('this is your user',user);
    db.get_all_faqs([user.id], function (err, faqs) {
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

  getRentersByAptId: function (req,res) {
    var apartment = req.params
    var admin = req.user[0]
    db.get_one_apt_renters([admin.id, apartment.id], function (err, renters) {
      res.status(200).send(renters)
    })
  },

  getAllUnassignedRenters: function (req, res) {
    var admin = req.user[0]
    db.get_all_unassigned_renters([admin.id], function (err, renters) {
      res.status(200).send(renters)
    })
  },

  getAvailableRooms: function (req, res) {
    var admin = req.user[0]
    db.get_all_available_housing([admin.id], function (err, rooms) {
      res.status(200).json(rooms)
    })
  },

  getAllGroups: function (req, res) {
    var admin = req.user[0]
    db.get_all_groups([admin.id], function (err, groups) {
      res.status(200).json(groups)
    })
  },

  getAllServiceRequests: function (req, res) {
    var admin = req.user[0]
    db.get_all_serv_reqs([admin.id], function (err, servReqs) {
      res.status(200).json(servReqs)
    })
  },

  getAllUsers: function(req, res) {
    var admin = req.user[0]
    db.get_all_users([admin.id], function(err, users) {
      res.status(200).send(users)
    })
  },

  createFaq: function(req, res) {
    db.faqs.insert({
      question: req.body.question,
      answer: req.body.answer,
      adminid: req.params.adminid
    }, function(err, faq) {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send(faq)
    });
  },

  createGroup: function(req, res) {

  },

  getSuperUserInfo: function (req, res, next) {
    var superuser = req.user[0]
    console.log(superuser);
    db.get_all_superuser_apts([superuser.id], function (err, apts) {
      // console.log('server: ', apts);
      res.status(200).send(apts)
    })
  },

  getAdminInfo: function (req, res, next) {
    var admin = req.user[0]
    db.get_all_admin_apts([admin.id], function (err, apts) {
      res.status(200).send(apts)
    })
  }



}
