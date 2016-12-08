// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", function($scope, admin, apartments, users, adminMainServ, apartmentsServ, locations) {
  // VARIABLES
  // ============================================================
  $scope.admin = admin;
  $( "#Create" ).hide();
  $scope.locations = locations.data;
  $scope.users = users.data;
  $scope.apartments = apartments.data;


  // FUNCTIONS
  // ============================================================

  $scope.createLocation = function (location) {
    adminMainServ.createLocation(location)
    .then(function(response) {
      alert('New Location Successfully Added!')
    }).catch(function(err) {
      console.log('ctrl err: ', err);
    });
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
    $( "#Create" ).hide();
    $("#addData").click(function() {
      $( "#Create" ).fadeIn( "slow" );
    });
    $("#cancelBtn").click(function() {
      $( "#Create" ).fadeOut( "slow" );
    });

    return false;
    });
});
