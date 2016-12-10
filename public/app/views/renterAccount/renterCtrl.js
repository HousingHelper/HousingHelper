// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("renterCtrl", function($scope, $state, user, admin, renterServ) {
  // VARIABLES
  // ============================================================

    // this is add show service req vars below
    $scope.toggle = false
    $scope.happy = 'Add New'
    // this is add show service req vars above
    $scope.show = true
    $scope.user = user;
    $scope.landlord = admin.data[0];
    // $scope.apartments = apartments.data
    $('#existingLogin').hide();

  // FUNCTIONS
  // ============================================================
  // $scope.getUserInfo = function (user){
  //   renterServ.getRenterAccById()
  //   .then(function(response){
  //     $scope.info = response.data;
  //   })
  // }  (user);
  // $scope.getUserAptInfo = function (user){
  //   renterServ.getRenterAccAptById()
  //   .then(function(response){
  //     $scope.aptInfo = response.data;
  //   })
  // }  (user);
  $scope.getUserServReq = function (user){
    renterServ.getRenterServReqById()
    .then(function(response){
      $scope.servreqs = response.data;
      console.log('sr: ', $scope.servreqs);
    })
  }  (user);

  $scope.updateUserAccountInfo = function (userAccInfo) {
    if(!userAccInfo.email){
      userAccInfo.email = $scope.user.email
    }
    if (!userAccInfo.phone) {
      userAccInfo.phone = $scope.user.phone
    }
    if (!userAccInfo.carmake) {
      userAccInfo.carmake = $scope.user.carmake
    }
    if (!userAccInfo.carmodel) {
      userAccInfo.carmodel = $scope.user.carmodel
    }
    renterServ.updateUserAccountInfo(userAccInfo)
    .then(function(response) {
      alert('Account Successfully Updated!');
      $state.go('renter');
    }).catch(function(err) {
      console.log('ctrl: ', err);
    });
  };

  $scope.updateUserPassword = function (password) {
    renterServ.updateUserPassword(password)
    .then(function(response) {
      $state.go('home');
    }).catch(function(err) {
      console.log('ctrl err: ', err);
    });
  };

  $scope.createServReq = function (sr) {
    renterServ.createServReq(sr)
    .then(function(response) {
      $('#existingLogin').hide();
      $state.go('renter')
    }).catch(function(err) {
      console.log('ctrl err: ', err);
    });
  }

  // this is scrolling the add button
    $scope.addDataClick = function () {
      $( "#existingLogin" ).fadeIn( "slow" );
    }
    $scope.cancelBtnClick = function() {
      $( "#existingLogin" ).fadeOut( "slow" );
    };
    // this is where i'm using an add show service req
    $scope.change = function() {
      console.log($scope.toggle);
      if(!$scope.toggle) {
        $scope.happy = 'Add New'
      }
      else{
        $scope.happy = 'Cancel'
      }
    }


});
