// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateUser", function($scope, user, $stateParams, renterServ, $state) {
  // VARIABLES
  // ============================================================
  $scope.user = user.data[0]
  $scope.changeUser;

  // FUNCTIONS
  // ============================================================
  $scope.editUser = function(user) {
    user.id = $stateParams.id
    renterServ.editUser(user)
    .then(function(response) {
      $state.go('adminRenters');
    }).catch(function(err) {
      console.log('ctrl: ', err);
    });
  }

});
