(function() {
  'use strict';

  angular.module('weatherApp')
    .controller('ForecastController', ['$scope', 'cityService', function($scope, cityService) {
      $scope.city = cityService.city;
    }])
})();
