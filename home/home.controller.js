(function() {
  'use strict';

  angular.module('weatherApp')
    .controller('HomeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
      $scope.city = cityService.city;

      $scope.$watch('city', () => {
        cityService.city = $scope.city;
      })

      $scope.submit = function() {
        $location.path("forecast");
      }
    }])
})();
