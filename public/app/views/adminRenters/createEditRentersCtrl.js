// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("createEditRentersCtrl", function($scope, users, groups) {
  // VARIABLES
  // ============================================================
  $scope.hide = false
  $scope.users = users.data
  // $scope.groups = groups
  console.log('users: ', $scope.users);

  // FUNCTIONS
  // ============================================================
  // this is scrolling the add button
  $(window).scroll(function(){
   var winScroll = $(this).scrollTop();
    if(winScroll < 45){
      $(".addBtnHolder").css("margin-top", 10 - $(window).scrollTop() + 'px');
    }else if (winScroll > 45) {
      $(".addBtnHolder").css({"margin-top":"-35px"});
    }
  });
  // this is the function for the add button model fade
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
