// INITILIZE DIRECTIVE
// ============================================================
angular.module("housinghelper").directive('footerDirective', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/footer/footerTmpl.html',
    controller: 'footerCtrl'
  };
});
