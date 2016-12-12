// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateGroup", function($scope, group, $stateParams, $state, adminMainServ) {
  // VARIABLES
  // ============================================================
  $scope.group = group.data[0]
  console.log('before change: ', $scope.group);


  // FUNCTIONS
  // ============================================================
  $scope.editGroup = function(group) {
    if (!group.startdate) {
      group.startdate = $scope.group.startdate
    }
    if (!group.enddate) {
      group.enddate = $scope.group.enddate
    }
    if (!group.checkindate) {
      group.checkindate = $scope.group.checkindate
    }
    if (!group.checkoutdate) {
      group.checkoutdate = $scope.group.checkoutdate
    }
    group.id = $stateParams.id
    console.log('afterchange: ', group);
    // adminMainServ.editGroup(group)
    // .then(function(response) {
    //   $state.go('groupList');
    // }).catch(function(err) {
    //   console.log('updategroupctrl: ', err);
    // });
  }

});
