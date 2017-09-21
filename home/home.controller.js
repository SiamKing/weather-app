(function() {
  'use strict';

  angular.module('weatherApp')
    .controller('HomeController', ['$scope', 'cityService', function($scope, cityService) {
      $scope.city = cityService.city;

      $scope.$watch('city', () => {
        cityService.city = $scope.city;
      })
    }])
})();
