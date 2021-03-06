// INITILIZE APP
// ============================================================
angular.module('housinghelper', ['ui.router', 'angular.filter'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    //Home STATE
    .state('home', {
      templateUrl: './app/views/landingPage/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    // adminMain STATE
    .state('adminMain', {
      url: '/adminMain',
      templateUrl: './app/views/adminMain/adminMain.html',
      controller: 'adminMainCtrl',
      resolve: {
        admin: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        },
        locations: function (apartmentsServ) {
          return apartmentsServ.getAllLocations()
        },
        apartments: function (adminMainServ) {
          return adminMainServ.getAllApts()
        },
        users: function(adminMainServ) {
          return adminMainServ.getAllUsersByLoggedInUser()
        }
      }
    })
    // Apartments STATE
    .state('apartments', {
      url: '/apartments/:id',
      templateUrl: './app/views/apartments/apartments.html',
      controller: 'apartmentsCtrl',
      resolve: {
        apts: function (apartmentsServ, $stateParams) {
          return apartmentsServ.getAptsById($stateParams.id)
        },
        servreqs: function (apartmentsServ, $stateParams) {
          return apartmentsServ.getAptsServReqs($stateParams.id)
        },
        admin: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        }
      }
    })
    // // adminRenters STATE
    .state('adminRenters', {
      url: '/adminRenters',
      templateUrl: './app/views/adminRenters/createEditRenters.html',
      controller: 'createEditRentersCtrl',
      resolve: {
        admin: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        },
        users: function(adminMainServ) {
          return adminMainServ.sortUsersbyGroups()
        },
        groups: function(adminMainServ) {
          return adminMainServ.getAllGroupsByLoggedInUser()
        },
        rooms: function (adminMainServ) {
          return adminMainServ.getAllRoomsByLoggedInUser()
        },
        apartments: function (adminMainServ) {
          return adminMainServ.getAllApts()
        }
        // admin: function (loginServ, $state) {
        //   return loginServ.getCurrentUser()
        //     .then(function(response) {
        //       if(!response.data)
        //       $state.go('home');
        //       return response.data
        //   }).catch(function(err) {
        //     $state.go('home')
        //   });
        // }
      }
    })
    // createEditRenters STATE
    // .state('createEditRenters', {
    //   url: '/createEditRenters',
    //   templateUrl: './app/views/createEditRenters/createEditRenters.html',
    //   controller: 'createEditRentersCtrl'
    // })
    // serviceRequests STATE
    .state('serviceRequests', {
      url: '/serviceRequests',
      templateUrl: './app/views/serviceRequests/serviceRequests.html',
      controller: 'serviceRequestsCtrl'
      , resolve: {
        servreqs: function(servReqServ) {
          return servReqServ.getServReqs();
        },
        notes: function(servReqServ) {
          return servReqServ.getServReqsNotes();
        },
        users: function(adminMainServ) {
          return adminMainServ.getAllUsersByLoggedInUser();
        },
        admin: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        }
      }
    })
    // toDoList STATE
    // .state('toDoList', {
    //   url: '/toDoList',
    //   templateUrl: './app/views/toDoList/toDoList.html',
    //   controller: 'toDoListCtrl'
    // })
    // unassignedRenters STATE
    .state('unassignedRenters', {
      url: '/unassignedRenters',
      templateUrl: './app/views/unassignedRenters/unassignedRenters.html',
      controller: 'unassignedRentersCtrl'
      , resolve: {
        unassignedRenters: function(renterServ) {
          return renterServ.getUnassignedRenters();
        },
        availableRooms: function(renterServ) {
          return renterServ.getAvailableRooms();
        },
        admin: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        }
      }
    })
    // founders state
    .state('founders',{
      url:'/founders',
      templateUrl:'./app/views/founders/founders.html',
      controller:'foundersCtrl'
    })
    // Group List STATE
    .state('groupList', {
      url: '/groups',
      templateUrl: './app/views/groups/groupList.html',
      controller: 'groupListCtrl',
      resolve: {
        groups: function(adminMainServ) {
          return adminMainServ.getAllGroups();
        },
        locations: function(adminMainServ) {
          return adminMainServ.getAllGroupsLocations();
        },
        users: function(adminMainServ) {
          return adminMainServ.getAllGroupsUsers();
        },
        admin: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        }
      }
    })
    .state('adminFaq', {
      templateUrl: './app/views/adminFaq/adminFaq.html',
      controller: 'adminFaq',
      url: '/adminFaq',
      resolve:{
        user: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        },
        faqs: function(faqServ) {
          return faqServ.getAllFaqs();
        }
      }
    })
    // Renter STATE
    .state('renter', {
      url: '/account',
      templateUrl: './app/views/renterAccount/renter.html',
      controller: 'renterCtrl',
      resolve: {
        user: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        },
        admin: function(renterServ) {
          return renterServ.getAdminByUser()
        }
      }
    })

    // User Faq page
    .state('ufaq', {
      url: '/ufaqs',
      templateUrl: './app/views/userfaq/faq.html',
      controller: 'faqCtrl',
      resolve: {
        user: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        }
      }
    })
    .state('soloUser', {
      templateUrl: './app/views/soloUserView/soloUserView.html',
      controller: 'soloUser',
      url: '/soloUser'
    })
    //Update All~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    .state('update', {
      templateUrl: './app/views/updateAll/updateView.html',
      controller: 'updateAll',
      url: '/update',
      resolve:{
        admin: function (loginServ, $state) {
          return loginServ.getCurrentUser()
            .then(function(response) {
              if(!response.data)
              $state.go('home');
              return response.data
          }).catch(function(err) {
            $state.go('home')
          });
        }
      }

    })
    //Update Apartment
    .state('update.apt', {
      templateUrl: './app/views/updateAll/updateApt/updateApt.html',
      controller: 'updateApt',
      url: '/apt/:id',
      resolve: {
        apartment: function(apartmentsServ, $stateParams) {
          return apartmentsServ.getAptsById($stateParams.id)
        },
        locations: function (apartmentsServ) {
          return apartmentsServ.getAllLocations()
        }
      }
    })
    //Update FAQ
    .state('update.faq', {
      templateUrl: './app/views/updateAll/updateFaq/updateFaq.html',
      controller: 'updateFaq',
      url: '/faq/:id',
      resolve: {
        faq: function(faqServ, $stateParams) {
          return faqServ.getFaqsById($stateParams.id)
        }
      }
    })
    //Update Group
    .state('update.group', {
      templateUrl: './app/views/updateAll/updateGroup/updateGroup.html',
      controller: 'updateGroup',
      url: '/group/:id',
      resolve: {
        group: function(adminMainServ, $stateParams) {
          return adminMainServ.getGroupByGroupId($stateParams.id)
        }
      }
    })
    //Update Service Request
    .state('update.serreq', {
      templateUrl: './app/views/updateAll/updateSerReq/updateSerReq.html',
      controller: 'updateSerReq',
      url: '/service/:id',
      resolve: {
        sr: function(servReqServ, $stateParams) {
          return servReqServ.getServReqBySRId($stateParams.id)
        },
        servreqs: function(servReqServ) {
          return servReqServ.getServReqs();
        }
      }
    })
    //Update User
    .state('update.user', {
      templateUrl: './app/views/updateAll/updateUser/updateUser.html',
      controller: 'updateUser',
      url: '/user/:id',
      resolve: {
        user: function(renterServ, $stateParams) {
          return renterServ.getUserbyUserId($stateParams.id);
        },
        apartments: function (adminMainServ) {
          return adminMainServ.getAllApts();
        },
        groups: function(adminMainServ) {
          return adminMainServ.getAllGroups();
        }
      }
    })








  })
