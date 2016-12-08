// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("faqCtrl", function($scope,faqServ, user) {
  // VARIABLES
  // ============================================================

      $scope.show = true
      $scope.user = user;

    // FUNCTIONS
    // ============================================================
    $scope.getfaqInfo = function (user){
      faqServ.getFaqsById()
      .then(function(response){
        $scope.faqs = response.data
      })
    }  (user);
});