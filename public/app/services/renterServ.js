// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("renterServ", function($http) {
  // CRUD FUNCTIONS
  // ============================================================

    // GET(READ) //
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

  this.getAdminByUser = function () {
    return $http({
      method:'GET',
      url: '/api/renterAccAdmin'
    }).then(function(response) {
      return response
    }).catch(function(err) {
      console.log(err);
    });
  };

  this.getRenterApt = function () {
    return $http({
      method: 'GET',
      url: '/renterAccApt'
    }).then(function(response) {
      return response
    }).catch(function(err) {
      console.log(err);
    });
  };

  this.getUserbyUserId = function(id) {
    return $http({
      method: 'GET',
      url: '/adminRenters/' + id
    })
  }


   // POST (CREATE) //

  this.createRenter = function (renter) {
    return $http({
      method: 'POST',
      url:'/api/renter',
      data: renter
    })
    .then(function(response) {
      swal({
        type: "success",
        title: "Created Successfully!",
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

  this.createServReq = function (sr) {
    return $http({
      method: 'POST',
      url: '/api/serviceRequests',
      data: sr
    }).then(function(response) {
      swal({
        type: "success",
        title: "Service Request Successfullly Sent!",
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

  // PUT (UPDATE) //
  this.updateUserAccountInfo = function (userAccInfo) {
    return $http({
      method: 'PUT',
      url: '/api/updateUserAccountInfo',
      data: userAccInfo
    }).catch(function(err) {
      swal({
        type: "error",
        title: "Encountered Error!",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
      console.log('serv err: ',err);
    });
  };

  this.updateUserPassword = function (password) {
    return $http({
      method: "PUT",
      url: '/api/updateUserPassword',
      data: {password: password}
    })
    .then(function(response) {
      swal({
        type: "success",
        title: "Password successfully updated. Please Re-Login",
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

  this.editUser = function(user) {
    return $http({
      method: 'PUT',
      url: "/api/putuser/" + user.id,
      data: user
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
