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

  $scope.newSRNote;
  $scope.selectedNote;

  // FUNCTIONS
  // ============================================================
  $scope.submitServReq = function(sr) {
    sr.citiesid = $scope.selectedUser.citiesid;
    sr.aptid = $scope.selectedUser.aptid;
    sr.renterid = $scope.selectedUser.id;
    console.log('newsr: ', $scope.newSr);
    servReqServ.submitSR(sr)
  }

  $scope.submitSRNote = function(srnote) {
    srnote.note = $scope.selectedNote.note
    // srnote.servreqid = $scope.selectedNote.servreqid;
    // srnote.citiesid = $scope.selectedUser.citiesid;
    console.log('srnote: ', $scope.srnote);

    servReqServ.submitSRNote(srnote);
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
