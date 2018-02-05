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
    this.city = "Okinawa";
});

//controller
weatherApp.controller('homeController',['$scope','cityService',function($scope,cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function (newCity) {
        cityService.city = newCity;
    });
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource', '$http', '$sce', '$httpParamSerializerJQLike',function($scope, cityService, $resource, $http, $sce, $httpParamSerializerJQLike) {

    // サービスで受け取った街を使えるように代入
    $scope.city = cityService.city;

    // trustAsResourceUrlにいれるまでは、まだセキュアなURLとして使用できない
    const unTrustedUrl = 'http://api.openweathermap.org/data/2.5/forecast/';

    // unTrustedUrlにくっつけるパラメータを定義
    let params = $httpParamSerializerJQLike({
        q: $scope.city,
        cnt: 2,
        units: 'metric',
        appid: ''
    });

    const promise = $http.jsonp($sce.trustAsResourceUrl(unTrustedUrl + '?' + params));
    promise.then(function(jsonp){
        $scope.weatherResult = jsonp;
        console.log(jsonp);
    });

}]);