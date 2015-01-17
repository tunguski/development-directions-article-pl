(function() {
  angular.module('mtImpress', ['ngSanitize', 'btford.markdown'])
  .controller('AppCtrl', function ($scope, $http, $location) {
    $scope.setView = function (name) {
      $scope.view = name;
    };
    
    $scope.view = 'pages/intro.smd';
  });
})();