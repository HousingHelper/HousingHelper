// INITILIZE SERVICE
// ============================================================
angular.module("housinghelper").service("loginServ", function($http) {
  // AUTH FUNCTIONS
  // ============================================================
  this.login = function(user) {
    return $http({
      method: 'post',
      url: '/api/login',
      data: user
    }).then(function(response) {
      return response;
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
  // this.getCurrentUser = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/me'
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
  // this.registerUser = function(user) {
  //   return $http({
  //     method: 'POST',
  //     url: '/register',
  //     data: user
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
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
