// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateGroup", function($scope, group, $stateParams, $state, adminMainServ) {
  // VARIABLES
  // ============================================================
  $scope.group = group.data[0]

  // FUNCTIONS
  // ============================================================
  $scope.editGroup = function(group) {
    group.id = $stateParams.id
    adminMainServ.editGroup(group)
    .then(function(response) {
      $state.go('groupList');
    }).catch(function(err) {
      console.log('updategroupctrl: ', err);
    });
  }

});
