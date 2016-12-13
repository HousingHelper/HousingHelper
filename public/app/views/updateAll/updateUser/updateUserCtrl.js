// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateUser", function($scope, user, apartments, groups, $stateParams, renterServ, $state) {
  // VARIABLES
  // ============================================================
  $scope.user = user.data[0]
  $scope.apartments = apartments.data
  $scope.groups = groups.data


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
