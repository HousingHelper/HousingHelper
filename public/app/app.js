// INITILIZE APP
// ============================================================
angular.module('housinghelper', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    //Home STATE
    .state('home', {
      templateUrl: './app/views/home/home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    // adminMain STATE
    .state('adminMain', {
      url: '/adminMain',
      templateUrl: './app/views/adminMain/adminMain.html',
      controller: 'adminMainCtrl'
    })
    // Apartments STATE
    .state('apartments', {
      url: '/apartments',
      templateUrl: './app/views/apartments/apartments.html',
      controller: 'apartmentsCtrl'
    })
    // createApartment STATE
    .state('createApartment', {
      url: '/createApartment',
      templateUrl: './app/views/createApartment/createApartment.html',
      controller: 'createApartmentCtrl'
    })
    // createEditRenters STATE
    .state('createEditRenters', {
      url: '/createEditRenters',
      templateUrl: './app/views/createEditRenters/createEditRenters.html',
      controller: 'createEditRentersCtrl'
    })
    // serviceRequests STATE
    .state('serviceRequests', {
      url: '/serviceRequests',
      templateUrl: './app/views/serviceRequests/serviceRequests.html',
      controller: 'serviceRequestsCtrl'
    })
    // toDoList STATE
    .state('toDoList', {
      url: '/toDoList',
      templateUrl: './app/views/toDoList/toDoList.html',
      controller: 'toDoListCtrl'
    })
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
      url: '/groupList',
      templateUrl: './app/views/groupList/groupList.html',
      controller: 'groupListCtrl'
    })
    // Renter STATE
    .state('renter', {
      url: '/renter',
      templateUrl: './app/views/renter/renter.html',
      controller: 'renterCtrl'
    })
    // FAQ STATE
    .state('faq', {
      url: '/faq',
      templateUrl: './app/views/faq/faq.html',
      controller: 'faqCtrl'
    })









  })
