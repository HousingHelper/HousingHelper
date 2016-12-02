// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", function($scope) { //apartments resolve?
  // VARIABLES
  // ============================================================
  // $scope.hide = true
  // $scope.testwers = 'testerino';
  // console.log('Ctrl: ', apartments);
  // $scope.apts = apartments;
  // FUNCTIONS
  // ============================================================
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
