// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("serviceRequestsCtrl", function($scope, servreqs, notes, users, servReqServ, $state) {
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
    servReqServ.submitSR(sr, srnote)
    .then(function(response) {
      $( "#Create" ).hide();
      $state.go('serviceRequests')
    });
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

    $scope.saAlert = function (){
      swal({
        title: "Are you sure?",
        text: "This Item Will Be Permanently Deleted!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#55AA55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm){
        if (isConfirm) {
          swal("Deleted!", "This Item Has Been Deleted.", "success");
        } else {
          swal("Cancelled", "This Item is safe :)", "error");
        }
      });
    }

    $scope.helpIcon = function(){
      swal({
        // type: "info",
        title: "Need Help?",
        text: "#1 Service Requests Are Usually Added By Your Renters. You Can Add Them As Well If You Would Like, By Clicking The Blue 'Create Service Request' Button #2 Current Service Requests Will Show On This Page After Being Created. #3 You Can Change The Status Of The Request By Clicking Edit #4 Edit Or Delete Request If Needed.",
      });
    }

});
