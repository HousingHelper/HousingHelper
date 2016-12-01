// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", function($scope, apartments) {
  // VARIABLES
  // ============================================================
  $scope.testwers = 'testerino';
  console.log('Ctrl: ', apartments);
  $scope.apts = apartments;
  // FUNCTIONS
  // ============================================================
});
