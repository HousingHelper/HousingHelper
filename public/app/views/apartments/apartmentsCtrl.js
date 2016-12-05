// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("apartmentsCtrl", function($scope, $state, apts, servreqs) {
  // VARIABLES
  // ============================================================
  $scope.id = $state.params.id
  $scope.apts = apts
  $scope.servreqs = servreqs

  // FUNCTIONS
  // ============================================================
});
