// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateAll", function($scope,$state) {
  // VARIABLES
  // ============================================================
  $scope.fadeIn = false
  // FUNCTIONS
  // ============================================================
  setTimeout(function(){
    $scope.fadeIn = true
    $scope.$apply()
  },1)
  // $scope.fadeOut = function(dest){
  //   $scope.fadeIn = false
  //   setTimeout(function(){
  //     $state.go(dest);
  //   },500)
  // }

});
