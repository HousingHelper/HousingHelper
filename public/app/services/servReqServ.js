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

  this.getServReqBySRId = function(id) {
    return $http({
      method: 'GET',
      url: '/serviceRequests/' + id
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
      alert("Service Request Successfully Created!");
    });
  };

  this.editSR = function(sr) {
    return $http({
      method: 'PUT',
      url: '/api/servRequest/' + sr.id,
      data: sr
    }).then(function(response) {
      alert('Service Request Successfully Updated!')
    }).catch(function(err) {
      console.log('err', err);
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
