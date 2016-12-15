// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("unassignedRentersCtrl", function($scope, unassignedRenters, availableRooms,renterServ) {
  // VARIABLES
  // ============================================================
  $scope.unassignedRenters = unassignedRenters.data
  $( "#Create" ).hide();
  $scope.availableRooms = availableRooms.data
  console.log(availableRooms);
  // FUNCTIONS
  // ============================================================
  //this where i am doing the drag and drop stuff ~~~~~~~~~~~~~~~~
  // $("input").droppable({
  //   drop: function(event, ui) {
  //     alert(ui.draggable.text());
  //   }
  // });


  // $(function() {
  //   $("input").droppable({
  //     drop: function(event, ui) {
  //       swal("Add Renter To This Appartment!", "When Ready Click Submit To Confirm");
  //       // alert('Add ' + ui.draggable.text() + ' to this Apt');
  //     }
  //   });
  //
  //   $("span").draggable();
  // });

  $scope.editUser = function(user, aptIndx) {
    // swal({
    //   type: "error",
    //   title: "Comming Soon!",
    //   text: "Auto close in 2 seconds.",
    //   timer: 2000,
    //   showConfirmButton: false
    // });
    user.aptid=  availableRooms.data[aptIndx].aptid
    user.roomid= availableRooms.data[aptIndx].roomid
    renterServ.editUser(user)
  }

  //this is the window button scroll ~~~~~~~~~~~~~~~~~
  $(window).scroll(function(){
   var winScroll = $(this).scrollTop();
    if(winScroll < 45){
      $(".addBtnHolder").css("margin-top", 10 - $(window).scrollTop() + 'px');
    }else if (winScroll > 45) {
      $(".addBtnHolder").css({"margin-top":"-35px"});
    }
    // console.log(winScroll);
  });

  $scope.helpIcon = function(){
    swal({
      // type: "info",
      title: "Need Help?",
      text: "#1 This Page Is Here To Assist The Process Of Assigning New Renters To Open Appartments. #2 Renters Without A Current Appartment Will Appear On The Left. #3 Apartments Currently With Openings Will Appear On The Right. #4 Add Renter To Room By Typing In Their 'Renter ID' And Clicking Submit",
    });
  }

});
