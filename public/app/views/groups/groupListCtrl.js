// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("groupListCtrl", function($scope, groups, locations, users, adminMainServ) {
  // VARIABLES
  // ============================================================
  $( "#Create" ).hide();

  $scope.groups = groups.data;
  $scope.locations = locations.data;
  $scope.users = users.data;
  $scope.myDate = new Date();

  // FUNCTIONS
  // ============================================================
  $scope.submitGroup = function(group) {
    adminMainServ.submitGroup(group);
  };

  // this is scrolling the add button
  $(window).scroll(function(){
   var winScroll = $(this).scrollTop();
    if(winScroll < 45){
      $(".addBtnHolder").css("margin-top", 10 - $(window).scrollTop() + 'px');
    }else if (winScroll > 45) {
      $(".addBtnHolder").css({"margin-top":"-35px"});
    }
    // console.log(winScroll);
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
