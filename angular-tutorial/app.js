// moduleの定義
const weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

//routeの作成
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


//controllerの作成
weatherApp.controller('homeController',['$scope',function($scope) {

}]);

weatherApp.controller('forecastController',['$scope',function($scope) {

}]);