// moduleの定義
const weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

//route
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

//service
weatherApp.service('cityService', function () {
    this.city = "Osaka";
});

//controller
weatherApp.controller('homeController',['$scope','cityService',function($scope,cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function (newCity) {
        cityService.city = newCity;
    });
}]);

weatherApp.controller('forecastController',['$scope','cityService','$resource',function($scope,cityService,$resource) {

    $scope.city = cityService.city;

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast', {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: 'JSONP'
        }
    });

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: 2,
        units: 'metric',
        appid: 'f09ccf28addde6486effcc15c32bfaf6'
    });

    console.log($scope.weatherResult);

}]);