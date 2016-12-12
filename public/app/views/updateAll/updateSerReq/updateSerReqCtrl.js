// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateSerReq", function($scope, sr, servreqs, $stateParams, $state, servReqServ) {
  // VARIABLES
  // ============================================================
  $scope.sr = sr.data[0]
  $scope.servreqs = servreqs.data

  // FUNCTIONS
  // ============================================================
  $scope.editSR = function(sr) {
    sr.id = $stateParams.id
    servReqServ.editSR(sr)
    .then(function(response) {
      $state.go('serviceRequests');
    }).catch(function(err) {
      console.log('updatesrctrl: ', err);
    });
  }
});
