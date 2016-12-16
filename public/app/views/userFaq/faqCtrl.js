// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("faqCtrl", function($scope, faqServ, user) {
  // VARIABLES
  // ============================================================

      $scope.show = true
      $scope.users = user;

    // FUNCTIONS
    // ============================================================
    $scope.getfaqInfo = function (){
      faqServ.getFaqsById()
      .then(function(response){
        console.log('ctrl: ', response.data);
        $scope.faqs = response.data
      })
    }  ();
});
