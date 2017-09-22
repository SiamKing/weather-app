(function() {
  'use strict';

  angular.module('weatherApp')
    .directive('weatherReport', function() {
      return {
        restrict: 'E',
        templateUrl: 'forecast/weatherReport.html',
        replace: true,
        // scope: {
        //   weatherDay: '=',
        //   convertToStandard: '&',
        //   convertToDate: '&',
        //   dateFormat: '@'
        // }
      }
    })
})();
