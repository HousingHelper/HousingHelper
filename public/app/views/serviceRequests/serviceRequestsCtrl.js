// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("serviceRequestsCtrl", function($scope, servreqs, notes, users, servReqServ) {
  $( "#Create" ).hide();
  // VARIABLES
  // ============================================================
  $scope.servreqs = servreqs.data;
  $scope.notes = notes.data;
  $scope.users = users.data;
  $scope.newSr;
  $scope.selectedUser;

  $scope.selectedNote;

  // FUNCTIONS
  // ============================================================
  $scope.submitServReq = function(sr, srnote) {
    sr.citiesid = $scope.selectedUser.citiesid;
    sr.aptid = $scope.selectedUser.aptid;
    sr.renterid = $scope.selectedUser.id;
    $scope.srnote = $scope.selectedNote

    console.log(sr, srnote);
    servReqServ.submitSR(sr, srnote)
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

    $scope.addDataClick = function () {
      $( "#Create" ).fadeIn( "slow" );
    }
    $scope.cancelBtnClick = function() {
      $( "#Create" ).fadeOut( "slow" );
    };


});
