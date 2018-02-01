// moduleの作成
var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'src/forecast.html',
            controller: 'forecastController'
        });
});

weatherApp.controller('homeController',['$scope', function ($scope) {
    
}]);

weatherApp.controller('forecastController',['$scope',function($scope) {
    
}]);