// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", function($scope, $state, admin, apartments, users, adminMainServ, apartmentsServ, locations) {
  // VARIABLES
  // ============================================================
  $scope.admin = admin;
  $( "#createLocation" ).hide();
  $( "#createApartment" ).hide();
  $scope.locations = locations.data;
  $scope.users = users.data;
  $scope.apartments = apartments.data;
  console.log('apartments:', apartments);


  // FUNCTIONS
  // ============================================================
  $scope.createApartment = function  (apt) {
    apt.city = apt.citiesid.city
    apt.citiesid = apt.citiesid.id
    adminMainServ.createApartment(apt)
    .then(function(response) {
      $( "#createApartment" ).hide();
      $state.go('adminMain')
    }).catch(function(err) {
      console.log('ctrl err: ', err);
    });
  }

  $scope.createLocation = function (location) {
    adminMainServ.createLocation(location)
    .then(function(response) {
      $( "#createLocation" ).hide();
      $state.go('adminMain')
    }).catch(function(err) {
      console.log('ctrl err: ', err);
    });
  }

  $scope.updateApt = function(id) {
    apartmentsServ.editApt(id)
  }

  // $scope.renters = function () {
  //   return apartmentsServ.getAllApartmentsWithRenters()
  //   .then(function(response) {
  //     $scope.apts = response.data
  //     console.log('RENTERS: ',response.data);
  //     }).catch(function(err) {
  //       console.log(err);
  //   });
  // }()

  // $scope.locations = function () {
  //   return apartmentsServ.getAllLocations()
  //   .then(function(response) {
  //     $scope.locations = response.data
  //     console.log('LOCATIONS: ', $scope.locations);
  //   }).catch(function(err) {
  //     console.log(err);
  //   });
  // }()

  // $scope.getInfo = function(admin) {
  //   if (admin.issuperuser) {
  //     adminMainServ.getSuperUserInfo()
  //     .then(function(response) {
  //       console.log('response:', response);
  //       $scope.apts = response.data
  //       console.log('apts:' , $scope.apts);
  //   })
  // }
  //   if (!admin.issuperuser) {
  //       adminMainServ.getAdminInfo()
  //       .then(function(response) {
  //       $scope.apts = response.data
  //       console.log('apts2: ', $scope.apts);
  //     })
  //   }
  // }(admin);

  $scope.filter = function () {}

  $(window).scroll(function(){
   var winScroll = $(this).scrollTop();
    if(winScroll < 45){
      $(".addBtnHolder").css("margin-top", 10 - $(window).scrollTop() + 'px');
    }else if (winScroll > 45) {
      $(".addBtnHolder").css({"margin-top":"-35px"});
    }
  });

  $(function() {
    $( "#createLocation" ).hide();
    $("#addLocation").click(function() {
      $( "#createLocation" ).fadeIn( "slow" );
    });
    $("#cancelBtn2").click(function() {
      $( "#createLocation" ).fadeOut( "slow" );
    });

    return false;
    });

  $(function() {
    $( "#createApartment" ).hide();
    $("#addData").click(function() {
      $( "#createApartment" ).fadeIn( "slow" );
    });
    $("#cancelBtn").click(function() {
      $( "#createApartment" ).fadeOut( "slow" );
    });

    return false;
    });


});
