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
    console.log('user', $scope.user);
    $scope.landlord = admin.data;
    console.log('landlord: ', admin.data);
    // $scope.apartments = apartments.data
    $('#existingLogin').hide();

    $scope.newSR = {
      request: '',
      type: '',
      permissions: '',
      note: ''
    }

    $scope.userAccInfo = {
      email: $scope.user.email,
      phone: $scope.user.phone,
      carmake: $scope.user.carmake,
      carmodel: $scope.user.carmodel
    }


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
    })
  }  (user);

  $scope.updateUserAccountInfo = function (userAccInfo) {
    console.log('useraccinfo: ', userAccInfo);
    renterServ.updateUserAccountInfo(userAccInfo)
    .then(function(response) {
      $state.go('renter');
    }).catch(function(err) {
      console.log('ctrl: ', err);
    });
  };

  $scope.updateUserPassword = function (password) {
    console.log('password:',password);
    renterServ.updateUserPassword(password)
    .then(function(response) {
      $state.go('home');
    }).catch(function(err) {
      console.log('ctrl err: ', err);
    });
  };

  $scope.createServReq = function (newSR) {
    renterServ.createServReq(newSR)
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
