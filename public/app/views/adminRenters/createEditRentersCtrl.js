// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("createEditRentersCtrl", function($scope, users, groups, rooms, renterServ) {
  // VARIABLES
  // ============================================================

  $( "#Create" ).hide();
  $scope.hide = false
  $scope.users = users.data
  $scope.groups = groups.data
  $scope.rooms = rooms.data
  console.log("rooms: ", $scope.rooms);

  // FUNCTIONS
  // ============================================================

  $scope.createRenter = function (renter) {
    renterServ.createRenter(renter)
    .then(function(response) {
      $state.go('adminRenters')
    }).catch(function(err) {
      console.log('ctrl err: ', err);
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

    $(function() {
        $('#datepicker').datepicker({
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'yy',
            onClose: function(dateText, inst) {
                var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                $(this).datepicker('setDate', new Date(year, 1));
            }
        });

       $("#datepicker").focus(function () {
            $(".ui-datepicker-month").hide();
            $(".ui-datepicker-calendar").hide();
        });

    });


});
