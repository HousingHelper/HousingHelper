// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("homeCtrl", function($scope, loginServ, $state) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================


  $scope.login = function(user) {
    $scope.spin = true
    loginServ.login(user)
    .then(function(response) {
      if (!response.data){
        $scope.user.password = "";
      return alert('user could not be logged in');
      }
      if(response.data){
        if(response.data.isadmin){
         $state.go('adminMain')
        } else {
         $state.go('renter')
        }
      }
      }).catch(function(err) {
        $scope.spin = false
        console.log(err);
        $scope.user.password = "";
        alert('user could not be logged in');
      });
  };


  $(function() {
        // Select link by id and add click event`
        $('#link1').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#part-one").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
  $(function() {
        // Select link by id and add click event
        $('#link2').click(function() {

          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#part-two").offset().top }, // Tell it to scroll to the top #bottom
            2000 // How long scroll will take in milliseconds
          );

          // Prevent default behavior of link
          return false;
        });
      });
      $(function() {
            // Select link by id and add click event
            $('#link3').click(function() {

              // Animate Scroll to #bottom
              $('html,body').animate({
                scrollTop: $("#part-three").offset().top }, // Tell it to scroll to the top #bottom
                2000 // How long scroll will take in milliseconds
              );

              // Prevent default behavior of link
              return false;
            });
          });
      // this is where im going to use window scroll to animate the nav bar*****************
      $(window).scroll(function(){
            var scrollLo = $(this).scrollTop();
            // turn the background to clear and fix the nav bar
              if(scrollLo >400){
                $("nav").css({
                  "position":"fixed",
                  "top":"0px",
                  "z-index":"10"
                });
                $(".aboutCon").css({
                  "margin-top":"46px"
                });
              }
              else {
                $("nav").css({
                  "position":"static"
                });
                $(".aboutCon").css({
                  "margin-top":"0px"
                });
              }

          })
// fading in the login and register
// ============================================================
$(function() {
  $( "#existingLogin" ).hide();
  $("#loginBtn").click(function() {
    $( "#existingLogin" ).fadeIn( "slow" );
  });
  $("#userBtn").click(function() {
    $( "#existingLogin" ).fadeIn( "slow" );
  });
  $("#cancelL").click(function() {
    $( "#existingLogin" ).fadeOut( "slow" );
  });

  // hide admin creator ((((((((((((((()))))))))))))))
  $( "#hideAdmin" ).hide();
  $("#adminBtn").click(function() {
    $( "#hideAdmin" ).fadeIn( "slow" );
  });
  $("#cancelR").click(function() {
    $( "#hideAdmin" ).fadeOut( "slow" );
  });

  return false;
  });

});
