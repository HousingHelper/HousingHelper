// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", function($scope, admin, adminMainServ) { //apartments resolve?
  // VARIABLES
  // ============================================================
  $scope.admin = admin;
  console.log('admin: ', admin);

  // admin.citiesid = apts.citiesid


  // FUNCTIONS
  // ============================================================
  $scope.getInfo = function(admin) {
    if (admin.issuperuser) {
      adminMainServ.getSuperUserInfo()
      .then(function(response) {
        console.log('response:', response);
        $scope.apts = response.data
        console.log('apts:' , $scope.apts);
    })
  }
    if (!admin.issuperuser) {
        adminMainServ.getAdminInfo()
        .then(function(response) {
        $scope.apts = response.data
        console.log('apts2: ', $scope.apts);
      })
    }
  }(admin);

  $scope.filter = function () {}

  $(window).scroll(function(){
   var winScroll = $(this).scrollTop();
    if(winScroll < 45){
      $(".addBtnHolder").css("margin-top", 10 - $(window).scrollTop() + 'px');
    }else if (winScroll > 45) {
      $(".addBtnHolder").css({"margin-top":"-35px"});
    }
  });


});
