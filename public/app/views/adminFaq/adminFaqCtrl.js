// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminFaq", function($scope, $state, faqServ, faqs) {

  // VARIABLES
  // ============================================================
  $scope.faqs = faqs.data;
  // console.log('faqs: ', $scope.faqs);
  $( "#Create" ).hide();

  // FUNCTIONS
  // ============================================================

  $scope.createFaq = function(faq){
    // $scope.spin = true
    faqServ.createFaq(faq)
    .then(function(response) {
      $( "#Create" ).hide();
      $state.go('adminFaq', {}, { reload: true })
    });
  };

  $scope.deleteFaq = function (id){
    swal( {
      title: "Are you sure?",
      text: "This FAQ Will Be Permanently Deleted!",
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
        // console.log('frontfaq:', id)
        faqServ.deleteFaq(id)
        .then(function(response) {
        swal("Deleted!", "This FAQ Has Been Deleted.", "success")
        $state.go('adminFaq', {}, { reload: true })
        });
      }   else {
        swal("Cancelled", "This FAQ is safe :)", "error");
        $state.go('adminFaq', {}, { reload: true })
      }
    });
  }

  //  JQUERY
  // ============================================================

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
      text: "#1 Current FAQ's Will Show On This Page After Being Created. #2 Creating FAQ's Will Give Quick Answers To Your Renters When They LogIn. #3 Adding Can Be Dont By Clicking The Button At The Top. #4 Edit Or Delete FAQ's If Needed.",
    });
  }

});
