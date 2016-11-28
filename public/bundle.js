// INITILIZE APP
// ============================================================
angular.module('housinghelper', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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
  });
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("headerCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test2 = 'header Test';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('headerDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/header/headerTmpl.html',
    controller: 'headerCtrl'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("footerCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('footerDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/footer/footerTmpl.html',
    controller: 'footerCtrl'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("sideNavCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'sideNav Test';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('sideNavDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/sideNav/sideNavTmpl.html',
    controller: 'sideNavCtrl'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("apartmentsCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("createApartmentCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("createEditRentersCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("faqCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("groupListCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("homeCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "testerino";
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("renterCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("serviceRequestsCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'test';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("toDoListCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerinio';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("unassignedRentersCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'test';
  // FUNCTIONS
  // ============================================================
}]);