// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("apartmentsServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getAptsById = function(adminid, aptid) {
    return $http({
      method: 'GET',
      url: '/apartments/' + adminid + '/' + aptid
    })
  };
  // this.createCollection = function(collection) {
  //   return $http({
  //     method: 'POST',
  //     url: '/collection',
  //     data: collection
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
