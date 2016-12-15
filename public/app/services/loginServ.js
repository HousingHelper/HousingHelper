// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("loginServ", function($http) {
  // AUTH FUNCTIONS
  // ============================================================
  this.login = function(user, org) {
    return $http({
      method: 'post',
      url: '/api/login',
      data: user
    }).then(function(response) {
      return response;
    }).catch(function(err) {
      console.log(err);
      swal({
        type: "error",
        title: "Login Failed. Please Try Again.",
        text: "Auto close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
      });
    });
  };
  // this.logout = function() {
  //   return $http({
  //     method: 'get',
  //     url: '/logout'
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/api/me'
    }).then(function(response) {
      return response;
    });
  };
  this.registerUser = function(user, org) {
    return $http({
      method: 'POST',
      url: '/api/register',
      data: {
        user: user,
        org: org
      }
    }).then(function(response) {
      return response;
    });
  };
  // this.editUser = function(id, user) {
  //   return $http({
  //     method: 'PUT',
  //     url: "/user/" + id,
  //     data: user
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
  // OTHER FUNCTIONS
  // ============================================================

});
