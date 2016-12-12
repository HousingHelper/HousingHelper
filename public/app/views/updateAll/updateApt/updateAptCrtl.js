// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("updateApt", function($scope, apartment, locations, $stateParams, apartmentsServ, $state) {
  // VARIABLES
  // ============================================================
  $scope.apartment = apartment.data[0]
  $scope.locations = locations.data

  // FUNCTIONS
  // ============================================================
  $scope.editApt = function (apartment) {
    apartment.id = $stateParams.id
    apartment.citiesid = apartment.city.id
    apartment.city = apartment.city.city
    apartmentsServ.editApt(apartment)
    .then(function(response) {
      $state.go('adminMain');
    }).catch(function(err) {
      console.log('ctrl: ', err);
    });
  }

  // $scope.fadeOut = function(){
  //   $scope.$parent.fadeOut('adminMain')
  // }

});
