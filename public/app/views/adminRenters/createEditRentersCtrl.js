// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("createEditRentersCtrl", function($scope, $state, users, groups, rooms, apartments, renterServ) {
  // VARIABLES
  // ============================================================

  $( "#Create" ).hide();
  $scope.hide = false
  $scope.users = users.data
  $scope.groups = groups.data
  $scope.rooms = rooms.data
  $scope.apartments = apartments.data
  $scope.renter = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    dob: null,
    gender: '',
    phone: '',
    hometown: '',
    private_room: false,
    carmake: '',
    carmodel: '',
    caryear: '',
    leasestart: null,
    leaseend: null,
    rentamt: 0,
    checkintime: '',
    checkouttime: ''
  }
  // console.log('rooms', $scope.rooms);

  // FUNCTIONS
  // ============================================================

  $scope.createRenter = function (renter) {
    if (!renter.email ) {
      return alert('Please Enter Email')
      $state.go('adminRenters')
    }
    if (!renter.password ) {
      return alert('Please Enter Password')
      $state.go('adminRenters')
    }
    if (!renter.firstname ) {
      return alert('Please Enter First Name')
      $state.go('adminRenters')
    }
    if (!renter.lastname ) {
      return alert('Please Enter Last Name')
      $state.go('adminRenters')
    }
    if (renter.checkintime) {
        renter.checkintime = renter.checkintime.toISOString().slice(0, 19).replace('T', ' ');
    }
    if (renter.checkouttime) {
        renter.checkouttime = renter.checkouttime.toISOString().slice(0, 19).replace('T', ' ');
    }

    // renter.aptid = renter.aptid.id
    // renter.roomid = renter.roomid.apartmentsid
    // console.log('renter: ', renter);
    // console.log('ctrl renter: ', renter)
    renterServ.createRenter(renter)
    .then(function(response) {
      $( "#Create" ).hide();
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
      var d = new Date().getFullYear()
        $('#datepicker').datepicker({
            yearRange: (d - 35) + ":" + (d + 1),
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
