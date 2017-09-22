(function() {
  'use strict';

  angular.module('weatherApp')
    .controller('ForecastController', ['$scope', '$stateParams', 'cityService', 'weatherService', function($scope, $stateParams, cityService, weatherService) {
      $scope.city = cityService.city;

      $scope.days = $stateParams.days || '2';

      $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

      $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
      }

      $scope.convertToDate = dt => {
        return new Date(dt * 1000);
      }
    }])
})();
