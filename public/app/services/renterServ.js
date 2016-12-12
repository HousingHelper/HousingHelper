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
      alert('Renter Successfully Created!')
    }).catch(function(err) {
      console.log('serv error: ', err);
    });
  };

  this.createServReq = function (newSR) {
    return $http({
      method: 'POST',
      url: '/api/serviceRequests',
      data: newSR
    }).then(function(response) {

      alert('Service Request Successfullly Sent!')
    }).catch(function(err) {
      log('ser err: ', err)
    });
  }

  // PUT (UPDATE) //
  this.updateUserAccountInfo = function (userAccInfo) {
    return $http({
      method: 'PUT',
      url: '/api/updateUserAccountInfo',
      data: userAccInfo
    }).catch(function(err) {
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
      alert('Password successfully updated. Please Re-Login')
    }).catch(function(err) {
      console.log('serv err: ', err);
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
