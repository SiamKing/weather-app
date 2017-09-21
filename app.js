

angular.module('weatherApp', ['ui.router', 'ngResource'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './home/home.html',
        controller: 'HomeController as vm'
      })
      .state('forecast', {
        url: '/forecast',
        templateUrl: './forecast/forecast.html',
        controller: 'ForecastController as vm'
      })
  }])
