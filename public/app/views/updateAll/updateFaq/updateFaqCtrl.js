// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateFaq", function($scope, faq, $stateParams, faqServ, $state) {
  // VARIABLES
  // ============================================================
  $scope.faq = faq.data[0]

  // FUNCTIONS
  // ============================================================
  $scope.editFaq = function(faq) {
    faq.id = $stateParams.id
    faqServ.editFaq(faq)
    .then(function(response) {
      $state.go('adminFaq', {}, { reload: true });
    }).catch(function(err) {
      console.log('updatefaqctrl: ', err);
    });
  }

});
