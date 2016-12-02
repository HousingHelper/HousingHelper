// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", function($scope, admin, adminMainServ) { //apartments resolve?
  // VARIABLES
  // ============================================================
  $scope.admin = admin;


  // FUNCTIONS
  // ============================================================
  $scope.getInfo = function(admin) {
    console.log(admin);
    if (admin.issuperuser) {
      adminMainServ.getSuperUserInfo()
      .then(function(response) {
        console.log('im here: ',response);
        $scope.apts = response.data
    })
  }
    if (!admin.issuperuser) {
        adminMainServ.getAdminInfo()
        .then(function(response) {
        $scope.apts = response.data
      })
    }
  }(admin);

  $(window).scroll(function(){
   var winScroll = $(this).scrollTop();
    if(winScroll < 45){
      $(".addBtnHolder").css("margin-top", 10 - $(window).scrollTop() + 'px');
    }else if (winScroll > 45) {
      $(".addBtnHolder").css({"margin-top":"-35px"});
    }
    // console.log(winScroll);
  });


});
