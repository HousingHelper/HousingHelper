// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("faqServ", function($http ) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getFaqsById = function(id) {
    return $http({
      method: 'GET',
      url: '/api/faq'
    })
  };
  this.createFaq = function(faq) {
    return $http({
      method: 'POST',
      url: '/api/createfaq',
      data: faq
    }).then(function(response) {
      return response;
    });
  };
  // this.editCollection = function(id, collection) {
  //   return $http({
  //     method: 'PUT',
  //     url: "/collection/" + id,
  //     data: collection
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
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
