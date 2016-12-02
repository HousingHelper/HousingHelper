// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("renterServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getRenterAccById = function(id) {
    return $http({
      method: 'GET',
      url: '/renterAcc/' + id
    })
  };

  this.getRenterAccAptById = function(id) {
    return $http({
      method: 'GET',
      url: '/renterAccApt/' + id
    })
  };

  this.getRenterServReqById = function(id) {
    return $http({
      method: 'GET',
      url: '/renterAccServReq/' + id
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
