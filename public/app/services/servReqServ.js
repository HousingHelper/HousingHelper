// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("servReqServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getServReqs = function() {
    return $http({
      method: 'GET',
      url: '/serviceRequests'
    })
  };

  this.getServReqsNotes = function() {
    return $http({
      method: 'GET',
      url: '/servreqnotes'
    })
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
