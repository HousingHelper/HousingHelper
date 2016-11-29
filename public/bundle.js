// INITILIZE APP
// ============================================================
angular.module('housinghelper', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  //Home STATE
  .state('home', {
    templateUrl: './app/views/home/home.html',
    controller: 'homeCtrl',
    url: '/'
  })
  // adminMain STATE
  .state('adminMain', {
    url: '/adminMain',
    templateUrl: './app/views/adminMain/adminMain.html',
    controller: 'adminMainCtrl'
  })
  // Apartments STATE
  .state('apartments', {
    url: '/apartments',
    templateUrl: './app/views/apartments/apartments.html',
    controller: 'apartmentsCtrl'
  })
  // createApartment STATE
  .state('createApartment', {
    url: '/createApartment',
    templateUrl: './app/views/createApartment/createApartment.html',
    controller: 'createApartmentCtrl'
  })
  // createEditRenters STATE
  .state('createEditRenters', {
    url: '/createEditRenters',
    templateUrl: './app/views/createEditRenters/createEditRenters.html',
    controller: 'createEditRentersCtrl'
  })
  // serviceRequests STATE
  .state('serviceRequests', {
    url: '/serviceRequests',
    templateUrl: './app/views/serviceRequests/serviceRequests.html',
    controller: 'serviceRequestsCtrl'
  })
  // toDoList STATE
  .state('toDoList', {
    url: '/toDoList',
    templateUrl: './app/views/toDoList/toDoList.html',
    controller: 'toDoListCtrl'
  })
  // unassignedRenters STATE
  .state('unassignedRenters', {
    url: '/unassignedRenters',
    templateUrl: './app/views/unassignedRenters/unassignedRenters.html',
    controller: 'unassignedRentersCtrl'
  })
  // founders state
  .state('founders', {
    url: '/founders',
    templateUrl: './app/views/founders/founders.html',
    controller: 'foundersCtrl'
  })
  // Group List STATE
  .state('groupList', {
    url: '/groupList',
    templateUrl: './app/views/groupList/groupList.html',
    controller: 'groupListCtrl'
  })
  // Renter STATE
  .state('renter', {
    url: '/renter',
    templateUrl: './app/views/renter/renter.html',
    controller: 'renterCtrl'
  })
  // FAQ STATE
  .state('faq', {
    url: '/faq',
    templateUrl: './app/views/faq/faq.html',
    controller: 'faqCtrl'
  });
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("footerCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('footerDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/footer/footerTmpl.html',
    controller: 'footerCtrl'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("headerCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test2 = 'header Test';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('headerDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/header/headerTmpl.html',
    controller: 'headerCtrl'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("sideNavCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'sideNav Test';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('sideNavDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/sideNav/sideNavTmpl.html',
    controller: 'sideNavCtrl'
  };
});
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("adminMainCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("apartmentsCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("createApartmentCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("createEditRentersCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerino';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("faqCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("foundersCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "testerino";
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("groupListCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("homeCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "testerino";
  // FUNCTIONS
  // ============================================================
  $(function () {
    // Select link by id and add click event
    $('#link1').click(function () {

      // Animate Scroll to #bottom
      $('html,body').animate({
        scrollTop: $("#part-one").offset().top }, // Tell it to scroll to the top #bottom
      2000 // How long scroll will take in milliseconds
      );

      // Prevent default behavior of link
      return false;
    });
  });
  $(function () {
    // Select link by id and add click event
    $('#link2').click(function () {

      // Animate Scroll to #bottom
      $('html,body').animate({
        scrollTop: $("#part-two").offset().top }, // Tell it to scroll to the top #bottom
      2000 // How long scroll will take in milliseconds
      );

      // Prevent default behavior of link
      return false;
    });
  });
  $(function () {
    // Select link by id and add click event
    $('#link3').click(function () {

      // Animate Scroll to #bottom
      $('html,body').animate({
        scrollTop: $("#part-three").offset().top }, // Tell it to scroll to the top #bottom
      2000 // How long scroll will take in milliseconds
      );

      // Prevent default behavior of link
      return false;
    });
  });
  // this is where im going to use window scroll to animate the nav bar*****************
  $(window).scroll(function () {
    var scrollLo = $(this).scrollTop();
    // turn the background to clear and fix the nav bar
    if (scrollLo > 400) {
      $("nav").css({
        "position": "fixed",
        "top": "0px",
        "z-index": "10"
      });
      $(".aboutCon").css({
        "margin-top": "46px"
      });
    } else {
      $("nav").css({
        "position": "static"
      });
      $(".aboutCon").css({
        "margin-top": "0px"
      });
    }

    // console.log(scrollLo);
  });
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("renterCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("serviceRequestsCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'test';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("toDoListCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'testerinio';
  // FUNCTIONS
  // ============================================================
}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("housinghelper").controller("unassignedRentersCtrl", ["$scope", function ($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = 'test';
  // FUNCTIONS
  // ============================================================
}]);