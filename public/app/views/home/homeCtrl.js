// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("homeCtrl", function($scope) {
  // VARIABLES
  // ============================================================
   $scope.test = "testerino"
  // FUNCTIONS
  // ============================================================
  $(function() {
        // Select link by id and add click event
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

            // console.log(scrollLo);
          })
});
