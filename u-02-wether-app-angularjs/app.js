// moduleの定義
const weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

//route
weatherApp.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'src/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'src/forecast.html',
        controller: 'forecastController'
    })
})

//service
weatherApp.service('cityService', function () {
    this.city = "Osaka";
});

//controller
weatherApp.controller('homeController',['$scope','cityService',function($scope,cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city',function(newCity) {
        cityService.city = newCity;
    })
}]);

weatherApp.controller('forecastController',['$scope','cityService',function($scope,cityService) {
    $scope.city = cityService.city;
}]);