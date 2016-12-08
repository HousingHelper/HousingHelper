// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("serviceRequestsCtrl", function($scope, servreqs, notes, servReqServ) {
  $( "#Create" ).hide();
  // VARIABLES
  // ============================================================
  $scope.servreqs = servreqs.data
  $scope.notes = notes.data

  // FUNCTIONS
  // ============================================================
  $scope.submitServReq = function(sr) {
    servReqServ.submitSR(sr)
  }

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
