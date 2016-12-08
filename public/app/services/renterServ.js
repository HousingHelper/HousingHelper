// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("renterServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getRenterAccById = function() {
    return $http({
      method: 'GET',
      url: '/renterAcc'
    })
  };

  this.getRenterAccAptById = function() {
    return $http({
      method: 'GET',
      url: '/renterAccApt'
    })
  };

  this.getRenterServReqById = function() {
    return $http({
      method: 'GET',
      url: '/renterAccServReq'
    })
  };

  this.getUnassignedRenters = function() {
    return $http({
      method: 'GET',
      url: '/unassignedRenters'
    })
  };

  this.getAvailableRooms = function() {
    return $http({
      method: 'GET',
      url: '/availableRooms'
    })
  };


  // CREATE //
  this.createRenter = function (renter) {
    return $http({
      method: 'POST',
      url:'/api/apartments',
      data: renter
    })
    .then(function(response) {
      alert('Apartment Successfully Created!')
    });
  }



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
