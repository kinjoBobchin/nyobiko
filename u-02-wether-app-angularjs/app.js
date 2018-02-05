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
        })

        .when('/forecast/:days', {
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

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource', '$http', '$sce', '$httpParamSerializerJQLike', '$routeParams', '$log',function ($scope, cityService, $resource, $http, $sce, $httpParamSerializerJQLike, $routeParams, $log) {

    // サービスで受け取った街を使えるように代入
    $scope.city = cityService.city;

    // 何日分のデータをとってくるかをパラメで受け取る
    $scope.days = $routeParams.days || 2;

    // trustAsResourceUrlにいれるまでは、まだセキュアなURLとして使用できない
    const unTrustedUrl = 'http://api.openweathermap.org/data/2.5/forecast/';

    // unTrustedUrlにくっつけるパラメータを定義
    const params = $httpParamSerializerJQLike({
        q: $scope.city + ",jp", //検索した都市名に国名をくっつけている
        cnt: $scope.days,
        units: 'metric',
        appid: 'f09ccf28addde6486effcc15c32bfaf6'
    });

    const promise = $http.jsonp($sce.trustAsResourceUrl(unTrustedUrl + '?' + params));
    promise.then(function(jsonp){
        $scope.weatherResult = jsonp;
    });

    $scope.convertDate = function (date) {
        return new Date(date * 1000);
    };

}]);