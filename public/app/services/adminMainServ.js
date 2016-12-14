// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("adminMainServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================

        //// GET REQUESTS ////
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

  this.getGroupByGroupId = function(id) {
    return $http({
      method: 'GET',
      url: '/allgroups/' + id
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

  this.getAllRoomsByLoggedInUser = function () {
    return $http({
      method: "GET",
      url: '/api/rooms'
    })
  }


  // CREATE //

  this.createApartment = function (apt) {
    return $http({
      method: 'POST',
      url:'/api/apartments',
      data: apt
    })
    .then(function(response) {
      swal({
        type: "success",
        title: "Apartment Successfully Created!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    });
  }

  this.submitGroup = function(group) {
    return $http({
      method: 'POST',
      url: '/api/creategroup',
      data: group
    }).then(function(response) {
      swal({
        type: "success",
        title: "Created New Group Successfully!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    });
  };

  this.createLocation = function (location) {
    return $http({
      method: 'POST',
      url: '/api/createlocation',
      data: location
    }).then(function(response) {
      swal({
        type: "success",
        title: "New Location Successfully Added!",
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
  }

  // UPDATE //

  this.editGroup = function(group) {
    return $http({
      method: 'PUT',
      url: "/api/groups/" + group.id,
      data: group
    }).then(function(response) {
      alert('Group Successfully Updated!');
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
