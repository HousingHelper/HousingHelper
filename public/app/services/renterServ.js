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

  // this.createCollection = function(user, org) {
  //   return $http({
  //     method: 'POST',
  //     url: '/collection',
  //     data: {
  //       user: user,
  //       org: org
  //     }
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
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
