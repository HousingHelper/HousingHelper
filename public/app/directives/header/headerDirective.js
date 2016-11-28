// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('headerDirective', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/header/headerTmpl.html',
    controller: 'headerCtrl'
  };
});
