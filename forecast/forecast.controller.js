(function() {
  'use strict';



  angular.module('weatherApp')
    .controller('ForecastController', ['$scope', '$resource', '$stateParams', 'cityService', function($scope, $resource, $stateParams, cityService) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ebb064ce75f44694206e534da5a924c8";
      $scope.city = cityService.city;

      $scope.days = $stateParams.days || '2';

      $scope.weatherAPI = $resource(url, {
        jsonCallbackParam: 'callback=JSON_CALLBACK',
        get: { method: "JSONP" }
      });

      $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

      $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
      }

      $scope.convertToDate = dt => {
        return new Date(dt * 1000);
      }
      console.log($scope.days)
    }])
})();
