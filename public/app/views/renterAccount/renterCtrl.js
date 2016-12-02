// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("renterCtrl", function($scope, user,renterServ) {
  // VARIABLES
  // ============================================================

    $scope.show = true
    $scope.user = user;

  // FUNCTIONS
  // ============================================================
  $scope.getUserInfo = function (user){
    renterServ.getRenterAccById()
    .then(function(response){
      $scope.info = response.data
    })
  }  (user);
  $scope.getUserAptInfo = function (user){
    renterServ.getRenterAccAptById()
    .then(function(response){
      $scope.aptInfo = response.data
    })
  }  (user);
  $scope.getUserServReq = function (user){
    renterServ.getRenterServReqById()
    .then(function(response){
      $scope.servreq = response.data
      console.log(response);
    })
  }  (user);



});
