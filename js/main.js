(function() {
  angular.module('mtImpress', ['ngSanitize', 'btford.markdown'])
  .controller('AppCtrl', function ($scope, $http, $location) {
    $scope.views = [
      { title: 'Dokumentacja',          subtitle: 'Tylko tekst',
        src: 'documentation/base' },
      { title: 'Jakość kodu',           subtitle: 'Automatyczna walidacja',
        src: 'code_quality/base' },
      { title: 'Architektura',          subtitle: 'Open source',
        src: 'architecture/base' },
      { title: 'Środowisko testowe',    subtitle: 'Docker',
        src: 'integration_tests/base' },
      { title: 'Utrzymanie',            subtitle: 'Monitoring',
        src: 'maintenance/base' },
      { title: 'Wdrożenie produkcyjne', subtitle: 'Skalowalność, downtime',
        src: 'production/base' },
    ];
    
    $scope.setView = function (view) {
      $scope.view = view;
      $location.path(view.src);
    };
    
    $scope.$on('$locationChangeStart', function () {
      console.log('Location changed!');
      $scope.viewPath = 'pages/' + $location.path() + '.smd';
    });
    
    $scope.setView({
      src: $location.path() ? $location.path() : 'intro'
    });
  });
})();
