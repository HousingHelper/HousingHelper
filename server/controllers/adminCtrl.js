var app = require('./../index')
var db = app.get('db')

module.exports = {

    getAllApartments: function(req, res) {
        var admin = req.user[0]
        db.get_all_admin_apts([admin.id], function(err, response) {
            console.log(response);
            res.status(200).json(response)
        })
    },

    getAllApartmentsByLoggedInUser: function (req,res) {
      var admin = req.user[0]
      if (admin.issuperuser) {
        db.get_all_apts_by_superuser([admin.orgid], function (err, apartments) {
          res.status(200).send(apartments)
        })
      } else if (admin.isadmin) {
        db.get_all_apts_by_admin([admin.id], function (err, apartments) {
          res.status(200).send(apartments)
        })
      }
    },

    getAllUsersByLoggedInUser: function (req, res) {
      var admin = req.user[0]
      if (admin.issuperuser) {
        db.get_all_users_by_superuser([admin.orgid], function (err, users) {
          res.status(200).send(users)
        })
      }
      else if (admin.isadmin) {
        db.get_all_users_by_admin([admin.id], function (err, users) {
          res.status(200).send(users)
        })
      }
    },

    getAllGroupsByLoggedInUser: function (req, res) {
      var admin = req.user[0]
      if (admin.issuperuser) {
        db.get_all_groups_by_superuser([admin.orgid], function (err, users) {
          res.status(200).send(users)
        })
      }
      else if (admin.isadmin) {
        db.get_all_groups_by_admin([admin.id], function (err, users) {
          res.status(200).send(users)
        })
      }
    },

    // getAllApartmentsWithRenters: function(req, res) {
    //     var admin = req.user[0];
    //     var result;
    //     if (admin.issuperuser) {
    //         db.get_all_apts_by_superuser([admin.orgid], function(err, response) {
    //             result = response;
    //
    //             loopFunc(0);
    //         })
    //
    //     } else if (admin.isadmin) {
    //         db.get_all_apts_by_admin([admin.id], function(err, response) {
    //             result = response;
    //
    //             // console.log(result);
    //             loopFunc(0);
    //         })
    //     }
    //
    //     function loopFunc(i) {
    //         if (i >= result.length) {
    //             return fin()
    //         }
    //
    //         // console.log(result[i].id);
    //         db.get_all_users_by_aptid([result[i].id], function(error, renters) {
    //             // console.log("RENTERS: ", renters);
    //             for (var j = 0; j < renters.length; j++) {
    //                 delete renters[j].password
    //             }
    //             result[i].renters = renters;
    //             loopFunc(i + 1);
    //         })
    //     }
    //
    //     function fin() {
    //         res.status(200).json(result);
    //     }
    // },

  getAllLocations: function (req, res, next) {
    admin = req.user[0]
    if(admin.issuperuser){
      console.log("upper");
      db.get_all_locations([admin.orgid], function (err, locations) {
        console.log("locations: ", locations);
        if (err){
            res.send("error: ", err)
          }
            res.status(200).json(locations)
          })
    } else if (admin.isadmin) {
      console.log('Lower');
      db.get_all_locations_by_user([admin.citiesid, admin.orgid], function (err, locations) {
        console.log("locations: ", locations);
        if (err){
          res.send("error: ", err)
        }
          res.status(200).json(locations)
        })
    }
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

  // getAllGroups: function (req, res) {
  //   var admin = req.user[0]
  //   db.get_all_groups([admin.id], function (err, groups) {
  //     res.status(200).json(groups)
  //   })
  // },

  getAllUsers: function(req, res) {
    var admin = req.user[0]
    db.get_all_users([admin.id], function(err, users) {
      res.status(200).send(users)
    })
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
  },

  getAllApartmentsWithRenters: function (req, res, next) {
    // var admin = req.user[0]
    db.please_work([86], function (err, renters) {
      if (err){
      res.send("error: ", err)
    }
      res.status(200).json(renters)
    })
  },

  getAllFaqs: function(req, res) {
      var user = req.user[0]
      // console.log('this is your user', user);
      db.get_all_faqs([user.id], function(err, faqs) {
          if (err) {
              res.send("error: ", err)
          }
          res.status(200).send(faqs)
      })
  },

    // getAptsByAdminId: function(req, res) {
    //     db.apartments.where("admin_id=$1", [req.params.adminId], function(err, apartments) {
    //         if (err) {
    //             res.send("error: ", err)
    //         }
    //         res.status(200).send(apartments)
    //     })
    // },

    getRentersByAptId: function(req, res) {
        var apartment = req.params
        var admin = req.user[0]
        db.get_one_apt_renters([admin.id, apartment.id], function(err, renters) {
            res.status(200).send(renters)
        })
    },

    getAllUnassignedRenters: function(req, res) {
        var admin = req.user[0]
        db.get_all_unassigned_renters([admin.id], function(err, renters) {
            res.status(200).send(renters)
        })
    },

    getAvailableRooms: function(req, res) {
        var admin = req.user[0]
        db.get_all_available_housing([admin.id], function(err, rooms) {
            res.status(200).json(rooms)
        })
    },

    getAllGroups: function(req, res) {
        db.get_all_groups([req.params.adminId], function(err, groups) {
            res.status(200).json(groups)
        })
    },

    getAllServiceRequests: function(req, res) {
        var admin = req.user[0]
        db.get_all_serv_reqs([admin.id], function(err, servReqs) {
            res.status(200).json(servReqs)
        })
    },

    createFaq: function(req, res) {
      var admin = req.user[0]
        db.create_faq([req.body.question,req.body.answer, admin.orgid,admin.aptid], function(err, faq) {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(faq)
        });
    },

    createGroup: function(req, res) {
      var admin = req.user[0]
        db.create_group([req.body.title, req.body.startdate, req.body.enddate, req.body.checkindate, req.body.checkoutdate, admin.orgid, req.body.citiesid], function(err, faq) {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(faq)
        });
    },

    getSuperUserInfo: function(req, res, next) {
        var superuser = req.user[0]
        db.get_all_superuser_apts([superuser.orgid], function(err, apts) {
            res.status(200).send(apts)
        })
    },

    getAdminInfo: function(req, res, next) {
        var admin = req.user[0]
        db.get_all_admin_apts([admin.id], function(err, apts) {
            res.status(200).send(apts)
        })
    },

    getAptsByAptId: function(req, res, next) {
        var admin = req.user[0]
        db.get_all_apts_by_aptid([admin.id])
    },
    createApt: function(req,res,next){
      var user = req.user[0];

      db.create_apt([req.body.title, req.body.address, req.body.apt_num, req.body.city
        ,req.body.state, req.body.zipcode, req.body.female_only_housing, req.body.male_only_housing, req.body.squareft
        , req.body.bedrooms, req.body.baths, req.body.parkingspace, req.body.currentocc
        , req.body.totalocc, req.body.wifiname, req.body.wifipwd, req.body.trashday, req.body.citiesid, user.orgid ],
        function(err, servreq) {
          res.status(200).json(err)
      })
    },
    updatefaq: function(req, res, next){
      var update = req.body;
       var key={};
     key.id =  update.id;
      db.faqs.save(key,update, function(err, faq){
        if (err){
          console.log("createapt error",err);
          return res.status(401).send(err);
        }
        // delete admin.password;
        res.status(200).json(faq);
      });
    },
    updategroups: function(req,res,next){
      var update = req.body;
       var key={};
     key.id =  update.id;
      db.groups.save(key,update, function(err, faq){
        if (err){
          console.log("createapt error",err);
          return res.status(401).send(err);
        }
        // delete admin.password;
        res.status(200).json(faq);
      });
    },
    updateApartment: function(req, res, next){
      var update = req.body;
       var key={};
     key.id =  update.id;
      db.apartments.save(key,update, function(err, faq){
        if (err){
          console.log("createapt error",err);
          return res.status(401).send(err);
        }
        // delete admin.password;
        res.status(200).json(faq);
      });
    }

}
