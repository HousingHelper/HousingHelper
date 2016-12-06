// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("groupListCtrl", function($scope, groups) {
  // VARIABLES
  // ============================================================
  $scope.groups = groups

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
