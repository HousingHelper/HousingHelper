// INITILIZE APP
// ============================================================
angular.module('housinghelper', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    templateUrl: './app/views/home/home.html',
    controller: 'homeCtrl',
    url: '/'
  });
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