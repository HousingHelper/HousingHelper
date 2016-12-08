// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateAll", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.fadeIn = false
  // FUNCTIONS
  // ============================================================
  setTimeout(function(){
    $scope.fadeIn = true
    $scope.$apply()
  },1)

});
