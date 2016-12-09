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

  this.submitSR = function(sr, note) {
    return $http({
      method: 'POST',
      url: "/api/fake",
      data: {
        request: sr.request,
           type: sr.type,
           permissions: sr.permissions,
           renterid: sr.renterid,
           aptid: sr.aptid,
           citiesid: sr.citiesid,
           note: note
      }
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
