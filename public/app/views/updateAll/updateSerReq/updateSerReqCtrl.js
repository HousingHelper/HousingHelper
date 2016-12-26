// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateSerReq", function($scope, sr, servreqs, $stateParams, $state, servReqServ) {
  // VARIABLES
  // ============================================================
  $scope.sr = sr.data[0]
  $scope.servreqs = servreqs.data
  $scope.newSr;

  // FUNCTIONS
  // ============================================================
  $scope.editSR = function(sr) {
    sr.id = $stateParams.id
    servReqServ.editSR(sr)
    .then(function(response) {
      $state.go('serviceRequests', {}, { reload: true });
    }).catch(function(err) {
      console.log('updateuser: ', err);
    });
  }
});
