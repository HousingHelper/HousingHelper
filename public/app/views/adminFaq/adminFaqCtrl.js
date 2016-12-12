// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminFaq", function($scope, faqServ, faqs) {
  $scope.faqs = faqs.data;
  $( "#Create" ).hide();
  // VARIABLES
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

  $scope.createFaq = function(faq){
    if (!faq.question || !faq.answer){
      return alert('please fullfill the form')
    }
    console.log(faq);
    faqServ.createFaq(faq)
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

});
