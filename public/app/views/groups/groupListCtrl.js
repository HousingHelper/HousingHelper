// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("groupListCtrl", function($scope, $state, groups, locations, users, adminMainServ) {
  // VARIABLES
  // ============================================================
  $( "#Create" ).hide();

  $scope.groups = groups.data;
  $scope.locations = locations.data;
  $scope.users = users.data;

  // FUNCTIONS
  // ============================================================
  $scope.submitGroup = function(group) {
    // if(!group.title){
    //   $state.go('groupList')
    // }
    // if (!group.citiesid) {
    //   $state.go('groupList')
    // }

    adminMainServ.submitGroup(group)
    .then(function(response) {
      $( "#Create" ).hide();
      $state.go('groupList', {}, { reload: true })
    });
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
        text: "#1 Current Groups Will Show On This Page After Being Created. #2 Add A New Group By Clicking The 'Add New Group' Button At The Top. #3 You Can Assign Renters To Groups While Creating A New User, or By Updating A Current User #4 Edit Or Delete Groups If Needed.",
      });
    }

});
