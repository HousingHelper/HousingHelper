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
        }
      }
    })
    // Apartments STATE
    .state('apartments', {
      url: '/apartments/:adminid/:aptid',
      templateUrl: './app/views/apartments/apartments.html',
      controller: 'apartmentsCtrl',
      // resolve: {
      //   apts: function (apartmentsServ, $stateParams) {
      //     return apartmentsServ.getAptsById($stateParams.adminid, $stateParams.aptid)
      //       .then(function(response) {
      //         return response.data;
      //     });
      //   }
      // }
    })
    // // adminRenters STATE
    .state('adminRenters', {
      url: '/adminRenters',
      templateUrl: './app/views/adminRenters/createEditRenters.html',
      controller: 'createEditRentersCtrl'
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
      controller: 'groupListCtrl'
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
        }
      }
      // resolve: {
      //   acc: function (renterServ, $stateParams) {
      //     return renterServ.getRenterAccById($stateParams.id)
      //       .then(function(response) {
      //         return response.data;
      //     });
      //   },
      //   apt: function (renterServ, $stateParams) {
      //     return renterServ.getRenterAccAptById($stateParams.id)
      //       .then(function(response) {
      //         return response.data;
      //     });
      //   },
      //   servReq: function (renterServ, $stateParams) {
      //     return renterServ.getRenterServReqById($stateParams.id)
      //       .then(function(response) {
      //         return response.data;
      //     });
      //   }
      // }
    })
    // FAQ STATE
    .state('faq', {
      url: '/faqs/:id',
      templateUrl: './app/views/faqs/faq.html',
      controller: 'faqCtrl',
      resolve: {
        faqs: function (faqServ, $stateParams) {
          return faqServ.getFaqsById($stateParams.id)
            .then(function(response) {
              return response.data;
          });
        }
      }
    })









  })
