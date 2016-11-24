// INITILIZE APP
// ============================================================
angular.module('housinghelper', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('home', {
      templateUrl: './app/views/home/home.html',
      controller: 'homeCtrl',
      url: '/'
    })



  })
