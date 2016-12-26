// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("faqServ", function($http ) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getAllFaqs = function() {
    return $http({
      method: 'GET',
      url: '/api/faq'
    })
  };

  this.getFaqsById = function() {
    return $http({
      method: 'GET',
      url: '/api/faqById'
    })
  };

  this.createFaq = function(faq) {
    return $http({
      method: 'POST',
      url: '/api/createfaq',
      data: faq
    }).then(function(response) {
      swal({
        type: "success",
        title: "FAQ Created Successfully!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    }).catch(function(err) {
      swal({
        type: "error",
        title: "Encountered Error!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      })
      console.log(err);
    });
  };

  this.editFaq = function(faq) {
    return $http({
      method: 'PUT',
      url: "/api/putfaq/" + faq.id,
      data: faq
    }).then(function(response) {
      swal({
        type: "success",
        title: "FAQ Updated Successfully!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    }).catch(function(err) {
      swal({
        type: "error",
        title: "Encountered Error!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    });
  };

  this.deleteFaq= function(id, $state) {
    console.log('serviceid: ', id);
    return $http({
      method: 'DELETE',
      url: '/api/delete/faq/' + id
    }).then(function(response) {
      swal({
        type: "success",
        title: "FAQ Deleted Successfully!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    }).catch(function(err) {
      swal({
        type: "error",
        title: "Encountered Error!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    });
    $state.go('adminFaq', {}, { reload: true })
  };

  // OTHER FUNCTIONS
  // ============================================================

});
