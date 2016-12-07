// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("adminMainServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getInfoByAdmin = function() {
    return $http({
      method: 'GET',
      url: '/adminMain'
    })
  };

  this.getSuperUserInfo = function () {
    return $http({
      method: 'GET',
      url: '/api/superuser/adminMain'
    })
  };

  this.getAdminInfo = function () {
    return $http({
      method: 'GET',
      url: '/api/admin/adminMain'
    })
  };

  this.getAllServReqs = function() {
    return $http({
      method: 'GET',
      url: '/serviceRequests'
    })
  };

  this.getAllGroups = function() {
    return $http({
      method: 'GET',
      url: '/allgroups'
    })
  };

  this.getAllGroupsLocations = function() {
    return $http({
      method: 'GET',
      url: '/allgroupsinalllocations'
    })
  };

  this.getAllGroupsUsers = function() {
    return $http({
      method: 'GET',
      url: '/allgroupsusers'
    })
  };

  this.getAllApts = function () {
    return $http({
      method: 'GET',
      url: '/api/adminMain/apts'
    })
  };

  this.getAllUsersByLoggedInUser = function () {
    return $http({
      method: 'GET',
      url: '/api/adminMain/users'
    })
  };

  this.getAllGroupsByLoggedInUser = function() {
    return $http({
      method: 'GET',
      url: '/allusersinallgroups'
    })
  };

  this.sortUsersbyGroups = function() {
    return $http({
      method: 'GET',
      url: '/allusers'
    })
  };



  // CREATE //

  this.createApartment = function (apt) {
    return $http({
      method: 'POST',
      url:'/api/apartments',
      data: apt
    })
    .then(function(response) {
      alert('Apartment Successfully Created!')
    });
  }


  this.submitGroup = function(group) {
    return $http({
      method: 'POST',
      url: '/???',
      data: group
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
