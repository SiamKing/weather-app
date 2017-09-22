(function() {
  'use strict';

  angular.module('weatherApp')
    .service('weatherService', ['$resource', function($resource) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ebb064ce75f44694206e534da5a924c8";

      this.GetWeather = function(city, days) {
        var weatherAPI = $resource(url, {
          jsonCallbackParam: 'callback=JSON_CALLBACK',
          get: { method: "JSONP" }
        });

        return weatherAPI.get({ q: city, cnt: days });
      }

    }])
})();
