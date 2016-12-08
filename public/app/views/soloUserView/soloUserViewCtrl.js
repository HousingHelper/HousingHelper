// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("soloUser", function($scope) {
  // VARIABLES
  // ============================================================
      $scope.toggle = false
      $scope.happy = 'Add Note'


  // FUNCTIONS
  // ============================================================
      // $scope.change = function() {
      //   var clicks = $(this).data('clicks'); //
      //    if (clicks) { //
      //      $scope.happy = 'Add Note'
      //    } else { //
      //      $scope.happy = 'Cancel'
      //
      //    } //
      //      $(this).data("clicks", !clicks);//
      // }

      // $scope.change = function() {
      //     $scope.happy = 'Cancel'
      // }
      $scope.change = function() {
        console.log($scope.toggle);
        if(!$scope.toggle) {
          $scope.happy = 'Add Note'
        }
        else{
          $scope.happy = 'Cancel'
        }
      }

});
