var app = require('./../index')
var db = app.get('db')

module.exports = {

// ____________________ GET (READ)_______________________________//

    getAllApartments: function(req, res) {
        var admin = req.user
        db.get_all_admin_apts([admin.id], function(err, response) {
            res.status(200).json(response)
        })
    },

    getAllApartmentsByLoggedInUser: function (req,res) {
      var admin = req.user
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
      var admin = req.user
      if (admin.issuperuser) {
        db.get_all_users_by_superuser([admin.orgid], function (err, users) {
          res.status(200).send(users)
        })
      }
      else if (admin.isadmin) {
        db.get_all_users_by_admin([admin.citiesid], function (err, users) {
          res.status(200).send(users)
        })
      }
    },

    getAllGroupsByLoggedInUser: function (req, res) {
      var admin = req.user
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
    //     var admin = req.user;
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
    var admin = req.user
    if(admin.issuperuser){
      db.get_all_locations([admin.orgid], function (err, locations) {
        if (err){
            res.send("error: ", err)
          }
            res.status(200).json(locations)
          })
    } else if (admin.isadmin) {
      db.get_all_locations_by_user([admin.citiesid, admin.orgid], function (err, locations) {
        if (err){
            res.send("error: ", err)
          }
            res.status(200).json(locations)
          })
      }
  },
  // allUnassingnedRenters: function(req, res, next){
  //   var admin = req.user;
  //   if (admin.issuperuser) {
  //     db.get_unassing_user_by_org([admin.orgid], function(err, locations){
  //       if (err){
  //         res.send('error: ', err)
  //       }
  //       res.status(200).json(locations)
  //     })
  //   }
  //   else if (admin.isadmin){
  //       db.get_unassing_user_by_citiesid([admin.orgid, admin.citiesid], function(err, locations){
  //       if (err){
  //         res.send('error: ', err)
  //       }
  //       res.status(200).json(locations)
  //     })
  //   }
  // },
  getAptsByAdminId: function (req, res) {
    db.apartments.where("admin_id=$1", [req.params.adminId], function (err,apartments) {
      if(err){
        res.send("error: ", err)
      }
      res.status(200).send(apartments)
    })
  },

  // getRentersByAptId: function (req,res) {
  //   var apartment = req.params
  //   var admin = req.user
  //   db.get_one_apt_renters([admin.id, apartment.id], function (err, renters) {
  //     res.status(200).send(renters)
  //   })
  // },
  // getAvailableRooms: function (req, res) {
  //   var admin = req.user
  //   db.get_all_available_housing([admin.id], function (err, rooms) {
  //     res.status(200).json(rooms)
  //   })
  // },

  // getAllGroups: function (req, res) {
  //   var admin = req.user
  //   db.get_all_groups([admin.id], function (err, groups) {
  //     res.status(200).json(groups)
  //   })
  // },

  getAllUsers: function(req, res) {
    var admin = req.user
    db.get_all_users([admin.id], function(err, users) {
      res.status(200).send(users)
    })
  },

  getAllFaqs: function(req, res) {
    var admin = req.user
    if (admin.issuperuser) {
      db.get_all_faqs_by_superuser([admin.orgid], function (err, faqs) {
        res.status(200).send(faqs)
      })
    } else if (admin.isadmin) {
      db.get_all_faqs_by_admin([admin.citiesid], function (err, faqs) {
        res.status(200).send(faqs)
      })
    }
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
      var admin = req.user
      db.get_one_apt_renters([admin.id, apartment.id], function(err, renters) {
          res.status(200).send(renters)
      })
  },

  getAllUnassignedRenters: function(req, res) {
      var admin = req.user
      if (admin.issuperuser) {
        db.get_all_unassigned_renters([admin.id, admin.orgid], function(err, renters) {
            res.status(200).send(renters)
        })
      }   else if
      (admin.isadmin){
            db.get_unassing_user_by_citiesid([admin.orgid, admin.citiesid, admin.id], function(err, renters){
            if (err){
              console.log(err);
              res.send({
                'error': err
              })
            }
            res.status(200).json(renters)
          })
        }
  },

  getAvailableRooms: function(req, res) {
      var admin = req.user
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
      var admin = req.user
      db.get_all_serv_reqs([admin.id], function(err, servReqs) {
          res.status(200).json(servReqs)
      })
  },

  getSuperUserInfo: function(req, res, next) {
      var superuser = req.user[0]
      db.get_all_superuser_apts([superuser.orgid], function(err, apts) {
          res.status(200).send(apts)
      })
  },

  getAdminInfo: function(req, res, next) {
    var admin = req.user
    db.get_all_admin_apts([admin.id], function(err, apts) {
        res.status(200).send(apts)
    })
  },

  getAptByAptId: function(req, res, next) {
    db.apartments.find({id: req.params.id}, function(err, apt) {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(apt)
    })
  },

  getFaqByFaqId: function(req, res, next) {
    db.faqs.find({id: req.users.id}, function(err, faq) {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(faq)
    })
  },

  getGroupByGroupId: function(req, res, next) {
    db.groups.find({id: req.params.id}, function(err, group) {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(group)
    })
  },

  getServReqBySRId: function(req, res, next) {
    db.servreqs.find({id: req.params.id}, function(err, sr) {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).send(sr)
    })
  },

  getAllRoomsByLoggedInUser: function (req,res,next) {
    var admin = req.user
    if (admin.issuperuser) {
      db.get_all_rooms_by_superuser([admin.orgid], function (err, rooms) {
        if (err){
          console.log("getrooms error",err);
          return res.status(401).send(err);
        }
        res.status(200).send(rooms)
      })
    } else if (admin.isadmin) {
      db.get_all_rooms_by_admin([admin.id], function (err, rooms) {
        if (err){
          console.log("getrooms error",err);
          return res.status(401).send(err);
        }
        res.status(200).send(rooms)
      })
    }
  },

// ____________________ POST (CREATE)_______________________________//

    createFaq: function(req, res) {
      var admin = req.user
        db.create_faq([req.body.question, req.body.answer, admin.orgid, admin.citiesid], function(err, faq) {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(faq)
        });
    },

    createGroup: function(req, res) {
      var admin = req.user
        db.create_group([req.body.title, req.body.startdate, req.body.enddate, req.body.checkindate, req.body.checkoutdate, admin.orgid, req.body.citiesid], function(err, faq) {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send(faq)
        });
    },

    createApt: function(req,res,next){
      // console.log('REQ.BODY: ', req.body);
      var user = req.user;
      db.create_apt([req.body.title, req.body.apt_num, req.body.address, req.body.city,
        req.body.state, req.body.zipcode, /*req.body.female_only_housing, req.body.male_only_housing, req.body.squareft
        , req.body.bedrooms, req.body.baths, req.body.parkingspace, req.body.currentocc
        , req.body.totalocc, req.body.wifiname, req.body.wifipwd, req.body.trashday, */req.body.citiesid, user.orgid],
        function(err, apt) {
          if (err) {
              return res.status(500).send(err);
          }
          res.status(200).send(apt)
      })
    },

    createLocation: function (req, res, next) {
      var user = req.user
      var location = req.body
      db.create_location([location.city, location.state, 1], function (err, location) {
        if (err) {
          res.status(500).send(err)
        }
        res.status(200).send(location)
      })
    },


// ____________________ PUT (UPDATE) _______________________________//

    updatefaq: function(req, res, next){
      var update = req.body;
      var key={};
      key.id =  update.id;
      db.faqs.update(key,update, function(err, faq){
        if (err){
          console.log("createapt error",err);
          return res.status(401).send(err);
        }
        // delete admin.password;
        res.status(200).send('FAQ Updated Successfully!');
      });
    },

    updategroups: function(req,res,next){
      var update = req.body;
      var key={};
     key.id =  update.id;
     db.groups.update(key,update, function(err, group){
      if (err){
        console.log("update group error", err);
        return res.status(401).send(err);
      }
      // delete admin.password;
      res.status(200).send('Group Successfully Updated!');
    });
    },

    updateApartment: function(req, res, next){
      var update = req.body;
      var key={};
      key.id = update.id;
      db.apartments.update(key, update, function(err, apt){
        if (err){
          console.log("updateapt error",err);
          return res.status(401).send(err);
        }
        res.status(200).send("Apartment Updated Successfully!");
      });
    }



// ____________________ DELETE _______________________________//



}
