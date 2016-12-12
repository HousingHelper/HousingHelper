// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("apartmentsServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getAptsById = function(id) {
    return $http({
      method: 'GET',
      url: '/api/apartments/' + id
    })
  };

  this.getAptsServReqs = function(id) {
    return $http({
      method: 'GET',
      url: '/apartments/serviceRequests/' + id
    })
  };

  this.getAllApartmentsWithRenters = function () {
    return $http({
      method: 'GET',
      url: '/api/adminMain/renters'
    })
  };

  this.getAllLocations = function () {
    return $http({
      method: 'GET',
      url: '/api/adminMain/locations'
    })
  }
  // this.createCollection = function(collection) {
  //   return $http({
  //     method: 'POST',
  //     url: '/collection',
  //     data: collection
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
  this.editApt = function(apartment) {
    return $http({
      method: 'PUT',
      url: "/api/apartments/" + apartment.id,
      data: apartment
    }).then(function(response) {
      alert('Apartment Updated Successfully!')
    }).catch(function(err) {
      console.log('SERV: ', err);
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
