// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("unassignedRentersCtrl", function($scope, unassignedRenters, availableRooms) {
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
  $(function() {
    $("input").droppable({
      drop: function(event, ui) {
        // swal("Add Renter To This Appartment!", "When Ready Click Submit To Confirm");
        // alert('Add ' + ui.draggable.text() + ' to this Apt');
      }
    });

    $("span").draggable();
  });
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

});
