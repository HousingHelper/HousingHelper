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
      swal({
        type: "success",
        title: "Apartment Updated Successfully!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    }).catch(function(err) {
      swal({
        type: "error",
        title: "Encountered Error!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
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
