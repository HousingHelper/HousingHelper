// INITILIZE APP
// ============================================================
angular.module('housinghelper', ['ui.router'])
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
      url: '/adminMain/:id',
      templateUrl: './app/views/adminMain/adminMain.html',
      controller: 'adminMainCtrl',
      resolve: {
        apartments: function (adminMainServ, $stateParams) {
          return adminMainServ.getInfoByAdminId($stateParams.id)
            .then(function(response) {
              console.log(response);
              return response.data;
          });
        }
      }
    })
    // Apartments STATE
    .state('apartments', {
      url: '/apartments',
      templateUrl: './app/views/apartments/apartments.html',
      controller: 'apartmentsCtrl'
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
      controller: 'renterCtrl'
    })
    // FAQ STATE
    .state('faq', {
      url: '/faqs',
      templateUrl: './app/views/faqs/faq.html',
      controller: 'faqCtrl'
    })









  })
