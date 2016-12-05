// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("unassignedRentersCtrl", function($scope, unassignedRenters, availableRooms) {
  // VARIABLES
  // ============================================================
  $scope.unassignedRenters = unassignedRenters
  $scope.availableRooms = availableRooms
  // FUNCTIONS
  // ============================================================
});
