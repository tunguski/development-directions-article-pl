(function() {
  angular.module('mtImpress', ['ngSanitize', 'btford.markdown'])
  .controller('AppCtrl', function ($scope, $http, $location) {
    $scope.setView = function (name) {
      $scope.view = name;
      $location.path(name);
    };
    
    if ($location.path()) {
      $scope.view = $location.path();
    } else {
      $scope.view = 'pages/intro.smd';
    }
  });
})();