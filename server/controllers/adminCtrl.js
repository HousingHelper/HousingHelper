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

    getAllApartmentsWithRenters: function(req, res) {
        var admin = req.user[0];
        var result;
        if (admin.issuperuser) {
            db.test3([admin.orgid], function(err, response) {
                result = response;

                loopFunc(0);
            })

        } else if (admin.isadmin) {
            db.test1([admin.id], function(err, response) {
                result = response;

                // console.log(result);
                loopFunc(0);
            })
        }

        function loopFunc(i) {
            if (i >= result.length) {
                return fin()
            }

            // console.log(result[i].id);
            db.please_work([result[i].id], function(error, renters) {
                // console.log("RENTERS: ", renters);
                for (var j = 0; j < renters.length; j++) {
                    delete renters[j].password
                }
                result[i].renters = renters;
                loopFunc(i + 1);
            })
        }

        function fin() {
            res.status(200).json(result);
        }
    },

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
    // getAllApartmentsWithRenters: function (req, res, next) {
    //   // var admin = req.user[0]
    //   db.please_work([86], function (err, renters) {
    //     if (err){
    //     res.send("error: ", err)
    //   }
    //     res.status(200).json(renters)
    //   })
    // },



    getAllFaqs: function(req, res) {
        var user = req.user[0]
        console.log('this is your user', user);
        db.get_all_faqs([user.id], function(err, faqs) {
            if (err) {
                res.send("error: ", err)
            }
            res.status(200).json(faqs)
        })
    },

    getAptsByAdminId: function(req, res) {
        db.apartments.where("admin_id=$1", [req.params.adminId], function(err, apartments) {
            if (err) {
                res.send("error: ", err)
            }
            res.status(200).send(apartments)
        })
    },

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
      // var admin = req.user[0]
        db.create_group([req.body.tittle,req.body.startDate,req.body.endDate,req.body.checkInDate,req.body.checkOutDate, 1,req.body.citiesid], function(err, faq) {
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
    }



}
