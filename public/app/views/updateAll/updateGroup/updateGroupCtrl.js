// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateGroup", function($scope, group, $stateParams, $state, adminMainServ) {
  // VARIABLES
  // ============================================================
  $scope.group = group.data[0]
  console.log('before change: ', $scope.group);
  $scope.newGroup;


  // FUNCTIONS
  // ============================================================
  $scope.editGroup = function(group) {
    if (!group.startdate) {
      // group.startdate = new Date($scope.group.startdate).toLocaleDateString()
      group.startdate = $scope.group.startdate
    }
    if (!group.enddate) {
      // group.enddate = new Date($scope.group.enddate).toLocaleDateString()
      group.enddate = $scope.group.enddate
    }
    if (!group.checkindate) {
      // group.checkindate = new Date($scope.group.checkindate).toLocaleDateString()
      group.checkindate = $scope.group.checkindate
    }
    if (!group.checkoutdate) {
      // group.checkoutdate = new Date($scope.group.checkoutdate).toLocaleDateString()
      group.checkoutdate = $scope.group.checkoutdate
    }
    group.id = $stateParams.id
    adminMainServ.editGroup(group)
    .then(function(response) {
      $state.go('groupList');
    }).catch(function(err) {
      console.log('updategroupctrl: ', err);
    });
  }

});
