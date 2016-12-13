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
      alert('FAQ Successfully Created!')
    }).catch(function(err) {
      console.log('serv: ',err);
    });
  };

  this.editFaq = function(faq) {
    return $http({
      method: 'PUT',
      url: "/api/putfaq/" + faq.id,
      data: faq
    }).then(function(response) {
      return response;
    });
  };
  // this.deleteCollection = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url: '/collection/' + id
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
  // OTHER FUNCTIONS
  // ============================================================

});
