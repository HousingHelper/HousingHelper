// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('sideNavDirective', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/sideNav/sideNavTmpl.html',
    controller: 'sideNavCtrl'
  };
});
